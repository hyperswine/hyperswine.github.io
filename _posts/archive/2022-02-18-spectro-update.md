---
layout: post
title: Spectro Update
---

## Yay?

So I kinda overcame a bit of the bug in the brain. Anyway It kinda makes sense now. Maybe? The UART0 output now shows. I literally encapsulated within a macro and called it. And it worked. So...

Well now we can start building kernel modules that use the kernel manager. The kernel manager is started on `_start`. Then the services are basically low level functions and algorithms that are builtin to the kernel code running. Higher level services like device service handler, networkd, loggers should be started after boot as a process running in pseudo kernel mode. Those services can be terminated by the user, with reprecussions. Though usually the kernel just resets or restarts them if something critical were to be messed with. So maybe those startup processes should just run in full kernel mode.

Also to compile a program to work on the kernel, need to first compile any bare metal riscv elf program. Then run that in userspace normally, on a single process thread (software process thread). Kernel should automatically handle multiple app level threads for a process. So async await can be handled by the kernel allocating another hardware thread. But to use higher level functionality, will need syscalls and mmio. For now, many things are just mmio. To call restricted stuff like `open, close, read, write, fork` need a syscall API. Can link `syscall.a` at compile/link time to ensure rust `extern "C" fn read` is found. By default, `syscall.a` is placed in the user HFS `/lib/syscall.a`.

The shell is very unix like. Pipes and files. I just like it more. But the GUI is very windowsy/macosy with a lot of beautiful graphics and anime.
So that means stuff like ENV variables, .bashrc + .profile (called rei_profile instead), `>>`, `&&`, `|` are all kept. But you are encouraged to do `less file.txt` instead of `cat file.txt | less`. So the arch is pretty macos/OOP/functional like. The shell is mostly unix based but the bad stuff are taken out. The lower level stuff and other stuff are all from first principles. POSIX API layer is there by default because I dont see a better way to do things yet. I feel like POSIX does make sense with the file handlers, threads, etc. Some other things can be simplified and changed on the fly.

## Parser & Analyzer

Hmm I think flex bison is pretty good. I could build something scala like that compiles to LLVM IR. That would be the big goal here. YEA

## Bugged

I cant get over the bugs. I keep feeling restricted and bug'd. The shame and stuff. I feel like I can go out though. Yea I not only can. I must.
