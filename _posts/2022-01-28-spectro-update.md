---
layout: post
title: Spectro Update
---
## Top down thinking and Bottom up thinking
So I found coding stuff from top down to be a great thing. Bottom up also seems ok but maybe its not that great to do the stuff at the bottom. I do like hardware.

## Phantasm
So yea it would be cool to have our own assembler from a syntax, e.g. Phantasm to RISC-V opcodes and stuff. So at startup the CPU is programmed to load instructions from the BIOS to RAM and execute them sequentially (single thread prob). It will load basic things like GPIO and power on some ports and stuff I think. Then the BIOS ROM will have an instruction to look at bootable drives. If EFI, will look for a boot.EFI file in the drives in a specific order defined by rules (user can change them). The first disk containing a boot.EFI will be booted.

## Bootloader
To boot that disk the BIOS ROM will look for pointers and stuff to partitions containing EFI boot partitions. Then it will load them into RAM. The BIOS ROM will then hand the execution to the bootloader program in RAM by incrementing the PC to the bootloader instruction addr. If multicore might be more complex but idk single thread looks ok for this part anyway. Multithreading becomes an issue in kernel load prob.

So now the bootloader program is running. It would have more control and complexity over the hardware. It may display images and stuff and even animations, which the BIOS ROM would prob be too small to do. The Bootloader is responsible for setting up the kernel by applying the kernel's config options, maybe stored in an ascii file header in the kernel header partition. Then it will load the kernel img into RAM, I think via DMA. With PCIE 4.0 SSDs and DDR5 RAM it should be a breeze. The thing is then to start executing the kernel code.

## Kernel
The kernel will have to set itself up like a normal program would. It would prob setup its managers and services, actually I think the services (syscalls) are already setup as the syscall ABI the moment the kernel is loaded. It will prob load its modules like filesystem manager (view of files), network manager (sockets), driver manager to listen to and handle hardware to do complex stuff. Any key background services (daemons) would be started and be listening on a socket to handle requests.

## GUI
Then we can get to the cool part. Complex graphics and Applications. Up to now just a black screen with maybe a pseudo terminal like setup like in FreeBSD. But now we can start the Window System and Window Manager. Some graphics may have already been loaded like animations in Win10 before login. But these are dynamic graphics and animations. Now the WM has loaded (and using the underlying kernel graphics modules with vulkano), we can start up some OS apps like the Desktop GUI, dock, app list, Desktop Widgets. Then startup apps like defender GUI, driver GUIs, third party stuff can be started. Finally the OS is fully loaded and ready to use without problems, e.g. race conditions.
