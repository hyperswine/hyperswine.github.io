---
layout: post
title: Spectro Update
---
## Starting to get a bit Anxious again
This always happens. One said to just write it up and build extra functionality when you need it. If you have to, refactor it on demand. Yes you can design from top down but usually its not a great idea unless you know exactly what you're doing. But if you dont, aka, like me. Then you just gotta do it.

## Feature A: SpectroVM
I want to upload a working demo onto [My site](spectralproject.github.io). It will be an entire machine from startup to booting into UEFI BIOS. Then finding the first bootloader available, or a bootloader. And booting into the bootloader screen. Then finding multiboot compliant kernels and booting the first one. I also then want to show the desktop environment. Stuff with draggable, resizable, minimizable, openable/closeable window instances. Not just windows but window instances 1..N based on how many that app that opens a window allows. Allow a program/process to open unlimited windows of a certain type. A program can open N windows of type T for functionality T. Most programs will only need a single window. Because a good app only has a specific functionality. If it is a debugger app or a designer app like Qt, Engineering, etc. then multiple windows makes sense. But can just assume one program, one window for 99% of the things.

## March Milestone
Would be so cool if I could get it up by around March. Then we can toggle what we want and say, "for the next 3-5 years or so, which is basically forever, something like this makes sense". Then if we want we can easily update the WM/DE to
upcoming styles as long as things are loosely coupled (window designs, DE functionality) with each other. We can even design them to be modular off the bat. That would be cool.
