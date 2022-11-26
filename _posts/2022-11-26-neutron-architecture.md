---
layout: post
title: Neutron Architecture
---

## Converging to an optimal design

I have changed neutron's design like 100 times already by now, I think its probably time to converge.

- functional, CoW in memory data structures with pointers and chunk based allocation, lock free MPMD ring buffers
- in memory drivers, execute only, pass through and event driven for input peripherals. Burst and interleaved transfers for disk operations. Always prioritise network transfers
- optimise for low code and code generation and more memory usage (non sparse vectors usually) to tradeoff for higher performance. Optimise for cacheable data and code. Singleton code for non generic functions and loops. Allow monomorphic functions otherwise for consteval, inlining and avoiding vtable lookups
- filesystems optimised for nand flash block/block group dynamics including log structuring and skip lists. Compressed read only assets (game executables, assets and big files)
- randomised algorithms and heuristics instead of overly complex algorithms and structures where possible

With the above in mind, neutron can be seen as a minimalist kernel with neutron-quanta as a userspace environment. Quantii can then be run ontop of quanta.

## In place and CoW

Its usually better to update a value in place. However if you are doing any multithreading or interrupts that might interrupt the operation, then it could be quite problematic. A thing to note is that modern multicore designs are generally optimised for good single threaded performance and local memory access. This means if you can bound an operation or operation scheme tightly to a single memory and processor domain, that would probably be more optimal than trying to schedule equally on all domains.

That being said, neutron-risc by default is configured to allocate processes and threads and very similar domains. Distance is the key factor that neutron takes into account in its scheduling algorithm. Usually, there are ~2 cores that have very fast access to a memory domain, and so a process P would be most likely allocated and pinned to it from the start, if the domain isnt congested. Processes may also be linked to other processes via ports and communication channels, and hence it would be optimal for communicating processes to be on the same domain (or close domains).

If done properly with a guarentee that interrupts and external unforeseen events will not be allowed to take place, in place updating could be directly implemented. In rust this is impossible even if you somehow had such guarentee. In rei, this becomes possible with dependent types and kernel api guarentees (at compile or runtime). The problem with forcing this particular core-pinning style is that it might not be able to scale as well as a fully multiprocessed workload. In that case, an accelerator should be used anyway, e.g. a GPGPU that could be more intrinsically suited for the task. Otherwise, auto conversion of AoS to SoA and lowering to vector instructions seems to be the best bet for small to medium data processing on the CPU. Not only that, but if you are able to properly split up the workload in advance, e.g. you know the vector is of size `N=10000` and you have 4 cores free, then you can make use of all them regardless of domain distance by `N/4 = 2500` and simply partition the in memory vector in equal parts to be processed independently. There may be some overhead by doing so, so a presetup at compile time to allow auto partitioning and creation of the vector on separate memory domains is one way to guarentee some level of latency.

## Chunk based allocation, Single Address Space

Neutron is inherently a chunk based allocated kernel that treats the entire usable memory space as a single pool of fixed size blocks called chunks. A chunk may be allocated for a specific task and be shared between processes and threads. The underlying system does not use paging, rather complete enforcement of position independent code for all executables. The only code that is able to read and write to absolute addresses are in memory driver libraries that may be mapped into a process' address space on approval by the user. Permissions are capabillity based and can be passed on from one app to another, allowing for a very simple security and permission system that should in theory, just work and be free from complex vulnerabilities.

Neutron uses a simplified version of the Executable and Linkable Format called the Neutron Binary Format (NBF). On neutron-risc, it is quite similar to ELF but does not use virtual addressing. The pasm assembler knows of the NBF and can readily serialise to it. NBF executables, like elf are not postfaced with any extension and should be run in a similar manner.

## Branches and Loops

To avoid the kernel and its associated drivers and userspace software from taking up too much of the system resources, features such as branches and loops are generally minimized and in some cases, discarded. Branches, especially branch groups and pattern matching algorithms are replaced with direct hash-offset branching. This also offers the advantage of much higher scalability for many branches and patterns. Avoiding branch prediction can also be unintentially cogent for preventing vulnerabilities that target speculative execution like meltdown.

Loops, especially `for` and `while` loops may become overly complex and hard to analyze and optimise. The compiler may even try to unroll the loop, and bloat the codespace as a result. This goes against the neutron philosphy of the singleton function. Instead, the `map` pattern of iterator methods are encouraged where possible to directly inform the compiler of the intent to parallelise and vectorise a loop like operation. Infinite loops are a common pattern in server and listener processes that might wish to sleep and wake, check buffer for requests, handle, and repeat. For this kind of use case, loops are generally ok.  

## Filesystem

Neutron is bound to NeFS. Neutron should be booted from an NeFS partition at its default path `/sys/bin`. Arcboot shares this driver with neutron via an in memory mapping scheme. With the default configuration for NeFS, file storage and compression is generalised to a common business use case with several file storage presets at each size. The underlying on disk structures use skip lists to store each chunk of data in a CoW manner, allowing for a builtin revision system akin to btrfs and git. With NeFS, files and chunks may be mapped to memory quite often. The chunk based allocator may also repartition subdomains to better fit file chunks, allowing minimal fragmentation. This works fast and efficiently since a lot of the repartitioning and analysis coincides with the general usage patterns of the average user; many unrelated operations can be done in the background while the user is focused on X.

NAND based storage devices are usually implemented through some form of page and block-based partioning, e.g. 4K pages and 512K blocks. The atomic read operation occurs on pages and write operations are more complex. It is possible to write to a preflushed or empty page. But it is not possible to overwrite a non clean page. Instead, the entire block the page belongs to must be flushed and rewritten to along with that page. Not only that, each time a page or block is flushed, it starts to wear out, and eventually may become unusable (e.g. 100 writes). This may seem quite bad but there are analysis I will go into later. So instead of just doing flushing the block each time you want to overwrite a page, the firmware usually tries to wear level by using unused pages and lesser used blocks instead. It then maintains a virtual page to physical page mapping in its ROM. By doing so, the SSD actually inadvertently implements CoW on blocks and pages. If one knows of the exact manner the firmware does this while knowing of its GC mechanics, one may be able to directly exploit CoW more efficiently. If one could perhaps turn off the GC, one could basically have a hardware level CoW.

### Ranges

A file can be seen as a skiplist of its root nodes and connected ranges. A node in its skiplist may be an up to date node or an older node (usually in the same range). Ranges are encoded implicitly into each file's skiplist and you must traverse it to get all its nodes. Doing so should be quite fast, `O(log(n))` on average to find any particular node and `O(k)` to simply read all the up to date nodes or a particular copy of the file (just one node would have changed). Balancing algorithms and more complex structures/algorithms are also unnecessary unlike in B+ Tree filesystems. A node encodes the range of the file and its associated data, as well as connected nodes. The set of root nodes encodes each revision of the file. When you follow the path of a particular root node at the highest `k` level, each subsequent node fills up the data for that revision of the file until you reach the end. Each node has one or more links based on the level it is at. Root nodes and pointers basically create a forest of nodes interconnected to each other.

By using such structure, we are able to quickly insert and delete nodes as well as find nodes. And on some systems where hardware RNG exists, the skiplist generation algorithms may be further enhanced among scheduling algorithms.

### Buffer Cache

Instead of just writing or reading from disk every single time you make a write/read call, what the driver will do is cache the request somewhere in memory. In neutron-quanta, `spx:fs` is scheduled to reorganise (not reorder) the requests and push them to disk only when necessary. This includes when the cache starts to become full and at each timer interval, e.g. 30s-5min.

This allows more efficient transfers and optimisations. Reorganising the requests into blocks and pages that best match the ranges and on disk structure and transferring when the system bus isn't too busy are generally great optimisations. Neutron prioritises lowering latency for user input events and network data transfers.
