---
layout: post
title: Spectro Update
---
## Spectro Simulator
I dont really want to use QEMU because then I will have to code for Sifive boards and be restricted to them. Technically I could use QEMU risc-v bare, which seems mostly good and implemented. And they have extra config and extensions. But then I'll have to use C and write the extensions and compile it/set a new configuration. So then I will have to use a 3rd party API. I dont like that idea.

So I wanted to build a VM, software emulator for riscv. Now it will just be interpreted, i.e. instructions converted on demand to x86. For simple unit tests and integration tests, should be fine. Printing should be fast and so as mallocing and stuff. But the problem is when you start testing out bigger apps and functionality which should get exponentially slower as you are interpreting them line by line. So then you can AOT transpile the riscv elf image into a form that can be executed in a containerised environment. Spectrainer x86 is an idea for a container/docker type environment on win32/x86 where you can run a transpiled riscv bare metal img.

## Drivers
I dunno about it. In linux >50% of the code are drivers. I think its a good idea to make drivers pluggable modules and have some open source, non-specific or official modules loaded by default. The installer can also check if any connected device would be supported by a driver from the driver module list. If there is that module can be linked in the install phase rather than the runtime phase.

## SpectroVM Drivers
The VM hardly needs any firmware since we are mostly trying to emulate the functionality of key devices char, block and network. Of which, mouse, kb, speaker, mic, output display, storage disk, ram, cpu, gpu are of interest. The output display driver is merely the monitor driver. The actual graphics stuff is handled by the graphics driver which can be quite complex. So as the network driver. For networking we simply provide an interface for ethernet, wifi, bt and connect it directly to the underlying stuff. I dont wanna touch networking too much rn but it is def quite a cool thing. You dont wanna end up like linux lol.
