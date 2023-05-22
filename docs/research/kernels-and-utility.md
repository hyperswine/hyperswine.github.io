---
sidebar_position: 3
---

# Enlightened Kernel Architecture: Utility, Security, and Performance

Kernels are a key part of a useful computing system. There have been many kernels implemented as a part of a greater system, e.g. an operating system. Such kernels include linux, bsd, nt, sun, dos kernel, etc. These kernels have been developed into their modern counterparts and widely used in GNU/Linux, Android (Google/Linux), Windows, MacOS, FreeBSD, and other smaller embedded systems. Some systems like the Pi may also have a small RTOS based on something like RODOS or ThreadX.

Newer kernels of interest include a myriad of RTOS's, fushcia (google), sel4, kataos (google), custom console kernels.

## Utility & Security

Kernels are built to be useful. Otherwise, you could just run apps directly on a system. It would prob be more problematic since you would have to use the direct abstractions. Or develop a library to communicate with the hardware directly. But how would you then ensure everything works properly and noone takes up too much time and compute? Well you could have a mediator program. But that mediator program could basically be then seen as a kernel. I believe modern kernels are more like mediators rather than abstractors.

In neutron, the kernel itself doesnt provide any abstractions. It's main job is to setup everything safely (its code is verified) and let others provide 99% of the functionality.

## Non Utility

Some specific things I dont really like:

- `println` or `print` or `system.out.println`. They assume things like `stdin`, `stdout`, `stderr` which Im not fond of
