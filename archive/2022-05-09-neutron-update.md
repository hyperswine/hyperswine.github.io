---
layout: post
title: Neutron ARM
---

## How does ARM work again?

So basically. You have CSRs that need to be set beforehand. Stuff like virtual mem and execution level.

IDK if QEMU boots with paging for the kernel. I.e. identity mapping. But we can set it up anyway. Like just write the actual value anyway.

For the linker, you need to ensure the virtual address and physical address are correct. I think the physical addr is basically ignored if paging is setup by the bootloader. So just need to mostly focus on virtual address.

Hence the stack pointer should also be relative to the virtual address. Again if identity paging is set up, then load the elf at like 0xFFFF... and the stack from 0x3FFF...

IDK about multiboot.

Just go from EL3 -> EL1. With a simulated exception.

Then set the CSRs for memory management. Mostly paging (not segmentation). This means TLB. And CSR that points to the TTBR1.

## Multiboot

[Here](https://www.gnu.org/software/grub/manual/multiboot2/multiboot.html#Boot-information-format)
