---
layout: post
title: Rei Design
---

## Rei, a high level systems language with high performance?

It feels almost weird and hard to make it happen. But rust is quite high level and includes many things in `std`. C++ too. But their philosophy is to be as generalistic as possible too, hence their interfaces are not as great to use compared to python.

- the question isnt high level per se. But, how easy and quick it is to write a piece of high level code without any areas of failure, and be high performance at the same time
- the last point is prob the big thing. How do we combine specificity and cleanliness with a simple interface that abides by the basic software eng principles, future upgrades, loose coupling within `std`, etc

## Designed for Generalistic Programming

A generalistic programming language is bound to miss out on certain features that would help out a lot more in certain areas. Haskell, Javascript, C are quite domain specific with things like mathematical accuracy, fast prototyping, assembly like functionality with bit manipulation and `goto`.

- these languages can also be considered general purpose as you can do basically anything if you tried. But you prob wouldnt use JS for coding firmware or OSes, nor would you use C for building an entire game with a GUI

I want a language that can do almost anything. Looking at rust, I have almost found the answer. Rust has many features and concepts to allow a fully-fledged full-stack development environment. You could use it for firmware & kernels (highly memory safe, C rep, stable ABI/no mangle support, asm support, cross compilation and speed), general purpose apps and utilities of high complexity (large std library with nice to use functionality, very good test suite, very good langauge server for complex statements and pre-checks for larger codebases), data analysis/ML & complex GUI & Servers (very nice to use and high performance crates for GUI, web backends and frontends, even some ML libraries)

- doesnt have great 'official'/'popular' graphing support for data scientists. Rust bindings for MPL (rustplotlib) does exist and works though
- iced-rs is decent but we dont have any popular tools like Qt with a layout/GUI placement editor. Other than that, graphics programming with vulkano and esp wgpu looks very good!

## Rei Semantics

So is it possible to have the same high performance, memory safety, low level tools with a cleaner, simpler syntax, builtin scripting capability, better graphing and graphical views like scala, python and matlab?

I would say yes. From first principles.

- `field` - allows custom structures, functions and variables to be 'first class objects' that can be passed around with almost zero overhead and default/core support
- `@annotations` - first class labeling of fields for cleaner syntax and more focus on the algorithm/design itself rather than metadata (unlike rust/c++)
- `fn` or `const/let` function definition for ease of complex function definition vs throwaway lambda/anon functions. Aka `function` is a type that can be declared implicitly like any other `var` or `object`
- TS, TS all the way with its syntax. But not its garbage collector!
- RUST like data race disallowance. I feel like maybe not needed if we go for GO instead, but idk I really dont want to have to write `Mutex<T>`. Maybe `@mutex`, `@spinlock` and `@semaphore` annotations which automatically detect shared memory races and implement functionality hooks for them
- C++/RUST RAII enforced very hard. Rust-like memory management with ownership and lifetimes. More emphasis on the compiler when you are actually making a `--release` build, interpreted should have simpler coder with higher level constructs like python

NOTE: the last point is very important since it kinda decides what a lot of the internal design looks like. We opt for a strong internal heap management to avoid the user from managing their own heap memory.

- for stuff like kernel code, that might be a bit hard since the kernel itself needs to manage the heap. So what you can do is use the general methods to ensure the places you need to manage dynamic memory is kept in `Dynamic {}` blocks
- in most cases, you should just use a struct created in `main()` and allow automatic deallocation after `main()`. Or use the builtin `Vec` which is very good
- with proper ownership semantics and lifetime annotations, it might be possible to ensure `Dynamic<T>` is safe all the time too

## Threading

The 2nd last point about locks and stuff. TBH I dont really know too much about their implementation. I know mutexes are mutually exclusives with `up-down` semantics and `spinlocks` need `test-and-set` atomics (needs hardware support for RAM/VRAM races). Otherwise `semaphore` works well too if you can redefine the problem as a producer-consumer problem with a volatile memory region and a bunch of consumers or producers.

- semaphores use sleep-wake semantics. Great for blocking a thread entirely until at least a single resource is available
- will also need to queue sleeping/active producers and consumers. In theory, every queued thread should eventually get to execute again since FIFO. But maybe longer wait times on simpler problems than a simple mutex
- mutexes use spinlock semantics. Great when you want a thread to have exclusive access to a piece of memory. Quite a bit different to semaphores, and are used the most often it seems
- spinlocks keep spinning with a `test-and-set`. An interrupt handler must not sleep else you can get into a lot of trouble/freezes. So you can just keep spinning within the interrupt handler. Usually used for a global shared region like GDT, Page Tables, etc. that can be changed on the fly by other kernel threads. If you spinlock you can also have a scheduler to pause on that test and set and instead handle another userspace thread request

Rei highly, highly emphasises the actual core code as the "actual code" and other things like metadata and comments as strictly "something else". They can and should still be placed in the same file, but just split more clearly

Im not gonna talk too much about thread requests. But when a userspace thread calls an `async` function or `spawn(function|process)` we should use another thread for it. That can maybe make a THREAD_SPAWN signal to the process manager at that PC, which can queue `(process_id, THREAD_SPAWN, PC, CORE_NUMBER)` for a kernel thread to take care of. Then the userspace code can keep executing on its main thread until a `join` or something, and wait for the kernel to return the data `(process_id, THREAD_SPAWN, RESULT_CODE)` and the actual data `(process_id, REQUEST_ID, COMPLETE)`
