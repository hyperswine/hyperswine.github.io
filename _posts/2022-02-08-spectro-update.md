---
layout: post
title: What to do?
---
## SpectroVM

So it seems like I should try to make a type 2 hypervisor. In that case you could write something like Yuzu where they simulate the ARM cpu completely in software. But pass the shaders and stuff into the host's. It seems like they do that JIT or AOT right before you launch the game. Then you are mostly bottlenecked by the CPU emulation, but the GPU is mostly fine because you can transpile a lot of the vulkan code or something.

## RV-1 Chisel Testing

Something is with that chisel testing. Maybe its the `extends XTest` or something that makes it not able to test in a builder context. Idk but damn.

What about simulating it? We have to compile it to c++ and modify the header/sources to interface with extra stuff. If its possible to build a VM with that, then one could modify it to do something like interface with the host's device and drivers, etc.
