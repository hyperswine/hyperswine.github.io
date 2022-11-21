---
layout: post
title: Neutron Update
---

## Running Neutron + ArcBoot on Spectrum SoC

So we want to compile Neutron to a .lib and link with arcboot.o to form `kernel.img`. This image can then be flashed onto a virtual drive `ssd.vhd` and placed on the host machine, e.g. `dev/ssd.vhd`. Then use verilator to simulate the SoC (RV-1 + PCIE + HDMI/UART for now). So I'd have to somehow connect the PCIE 4.0 lane to ssd.vhd, or we have to simulate an SSD within the SoC and flash the image onto their beforehand, after compiling to verilog. Then I'd have to link the UART port to the output of the terminal somehow, maybe thats possible somehow, with verilator.

## So far

Figured out how to create a basic bootloader in asm and kernel in rust and link them into a bootable img for qemu riscv64 (spike board). The output works. Im not sure about all the different views, guessing thats got something to do with the main QEMU monitor view vs UART serial view or something. Idk how to get it to print to the main monitor, if that even makes sense. The bootloader does seem to work I think, because it does go into `kernel_main`. The other stuff like setting up the stack and program segements for the kernel in RAM doesnt seem to matter too much rn. I dont really get how to compile all the rust code to a .lib/.o file, I did `--emit=obj` which seemed to emit some random `.o` file in `target/debug/deps/` instead of `target/neutron/` or something. It also emits a different obj file name sometimes and doesnt delete the old one. So I dont think this is how one is meant to be cross compiling rust. I dont really get it then, maybe its better and recommended to link with rustc directly somehow, by specifying `boot.S` and `linker.ld` when we build for riscv64gc? I think there was a way to do that but idk rn and a bit confused.
