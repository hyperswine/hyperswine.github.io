---
layout: post
title: Spectro Update
---
## RV-1

So I uploaded my RV-1 draft core to github, its pretty rough and I hardly know what I am even doing. But you know its just too cool to give up. Anyway Im having quite a bit of a problem with testing. Something wrong with not being in a builder context with one of the tests.

Im trying to test the ALU and specified x, y, and op. Then I stepped over a clock cycle. Then I called `expect()` on the  io result. Im not sure where it is stopping, maybe I could have some `printf` statements within the test functions too?

## Spectro VR

Yes it is way too cool. I dunno how but yes. With a nice 3d printer we can try stuff out. But I'll need some space first. At least a few cabinets, the one big one on the wall and 2 mounted on the wall. Also 2 cabinets in the kitchenette.

## Neutron Kernel interfacing with Spectro Simulator

QEMU is kinda annoying to deal with since it is in C. Like the interface is in C if you want higher level customisation. Which isnt great. I want to build an interface to a spectro runner in rust. Maybe in arcboot or something.

So with QEMU theres a bunch of things with the UART0 ports and stuff which I dont like. Well at least for now. It'd be great to emulate a parallel port and interface with the Spectro ABI within a containerised environment. Like docker or a custom container arch like ardaku containers.

## Ardaku Containers

An idea for `.wasm` files. So you have a docker like thing with its own isolated filesystem (basically a zip file emulated as a complete HFS like a `.vhd` file) and env variables. Then if you want to emulate riscv you cant really make use of type 1 virtualisation. So you have to stick to type 2 and either interpret the riscv instructions or transpile JIT/AOT. Transpiling AOT means you have to write a wrapper to translate all the instructions to x86 ones, which in theory should run well but for bare metal and lower level code maybe not. Better then to run wasmer on the host system/os + ISA and run the wasm binaries JIT.

## Spectro Simulator

Basically a RISCV64GC software emulator. You emulate an entire CPU that you want to emulate. Then you
make an interface for it in yew.rs or something. Or iced-rs. Literally just 32 of the 32-bit registers when in 32-bit mode. Idk how to implement 'machine modes to user modes' i.e. levels 3-0 in hardware. Maybe it isnt too hard. But in software its not that bad, just might not be that efficient.

The emulator will run in a container or something with its own set of RAM and files. Then we copy a riscv binary over. The emulator will execute the instructions in 'machine' mode. Usually it would be able to affect anything but it is in a container so it cant completely destroy the RAM and files I think. Anyway so inside the container, we run the program and specify the file to run. Then it runs it sequentially and we get to see the output of the registers and memory. Idk how it can affect memory, maybe we can just open a `RAM.txt` file in memory and it literally just uses that as RAM. It can use as much of it as it wants (possible as long as there is enough RAM).

For devices, we can simulate a monitor with the console or an opengl window or something. Maybe if it writes stuff to UART0 we redirect it to `UART0.txt` and show the contents as more stuff is being written. So read() and write() affects `UART0.txt`. KB and Mouse inputs are not supported yet without drivers that somehow direct my mouse positions and keyboard presses to interrupts. Might need some kind of software program unless I can redirect them to the program's interrupt controller ABI almost natively.
