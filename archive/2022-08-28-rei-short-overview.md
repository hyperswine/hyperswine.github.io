---
layout: post
title: Rei
---

## What is Rei?

I ask myself that every day. I hate the current languages on the market. The best one is rust. But even still, its not perfect. I want to strive torwards something greater. Something magnificent.

Rei is a magnificent language. Designed for humans for building systems.

It is a general purpose, object-directed, functional, clear, systems programming language.

## What is a clear language?

One of the biggest problems with modern programming languages is that they arent very clear, especially when they scale up into millions of lines of code.

What they usually do is to have some generic meta build system like make. And specify your input files and so on. The less painful ones have a built in package management system as well as an auto build system based on a conventional directory structure.

What rei does is move in this general direction further. And really build on that so we actually have something that isnt painful to manage and maintain. This includes ideas on auto patching, one-wayness (vs flexibility), and strength.

## What is a systems language?

Safety and performance.

To be safe is a blessing. It is automatically granted by default as long as you write code without explicit unsafe blocks. In rei the concept of unsafe is extended to systems and modules as well as variables. A 'global' variable must be declared with `unsafe`. Unless you wrap it around in a lock that impls the right traits.

Performance is a virtue. The program will only run as fast as your code. It will only be responsive as you make it. But there are tools that make performance quite easy. And the default structure. Such as bottleneck checking and zero-overhead abstractions. The memory footprint is very low and if you use the builtin library tools well, you should be able to utilise the system hardware most effectively for your program. There are of course auto helpers and tools to help you reach this as well.

Note, "security" is often used as well. For a systems language, its hard to be completely secure as you are writing the code that grants security. If you follow the safety rules with all safe code, there is a guarentee of security. But if you dont, which you are bound to, then anything can happen. Especially if you are writing hacky workarounds. In that case, the IDE analyzers and auto testers will warn you.

### Multithreading

Nowadays most processors have at least 4 cores and on avg 8-32 cores. Its good to be able to use as much of your hardware as possible. While balancing a low resource footprint when you dont need to work as hard.

Many apps are simply single threaded. Do they have to? Well sometimes its actually more performant to do so due to NUMA and cache-memory locality. A full SMP system with very fast shared cache and bus would in theory solve these issues. But that would be expensive and unscalable. Instead we could try a compromise between them. With chiplet SMPs. But we would still deal with NUMA.

So one of the things is to mold a language around the hardware as 99% of the time its going to run on it and if a new hardware spec comes along, you could just make another language or remake it for it.

## High Level Applicability

Rei is also a language with high level constructs. Systems/abstractions, sugar and extensions.

Choose your abstraction. By default you are granted the `std` lib for most of your use cases which is made to be as performant as rust std.

## Interop

Rust has a wide range of libraries that do not need to be reinvented. So rei has quite a bit of interop with rust.

All rust modules and structs/impls are converted into their equivalent rei form, systems.

## Root Object

As a systems oriented language, there is a root 'system akin to a root object. But not just for primitive types and other systems. Everything that isnt data or a function is a system.

That means enums, unions, etc. And they are "hooked" into the compiler by their respective libraries. Like rust where you have proc macros, in rei you have even stronger syntactical manipulation and sugaring through special prei library targets known as "compiler hook libraries".
