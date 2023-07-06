---
sidebar_position: 1
---

# Dynamic Design Theory

**By Jasen Qin.**

How does one design a dynamic system according to its intrinsics? Is there a generic higher order way to reason about it? We want optimise for low latency, high throughput, while maintaining a sense of control and elegance over the model.

---

## Pt 1. Precursor Fields and Related

## Latency Sensitive Design (LSD)

LSD is a science of software design that attempts to formalise the idea of latency in program specifications.

LSD deals with information and byte flux at the register level to the function level. What LSD allows us to do is reduce and model a hardware + software environment in a flow centric manner, observing bottlenecks and optimising the software intent in a constrained environment, e.g. subject to battery usage and heat generation.

---

## Precursors

**Algorithmic complexity** ⇒ Applicable to anything reducible to a formal algorithm. Big O Notation, constant, linear, logarithmic, exponential. A high level overview of an algorithm’s mathematical behavior in a vacuum. Unfortunately does not capture the underlying systems that tries to emulate/execute a specification.

**Queuing theory** ⇒ Erlang related, exactly like what it sounds like. The science of queues and waiting in line.

**Traffic theory** ⇒ Flow and density of traffic. Flux.

**Tools** ⇒ profiling tools like criterion, flamegraphs, unix `time`, and possibly more I don’t know about.

## Little’s Law

Given a queue system in a stable state: $\text{avg. requests} = \text{avg. arrival rate} \times \text{avg. time spent}$.

## Amdahl’s Law

Amdahl’s Law is concerned with parallelisation and response times.

## Traffic Models

A traffic model describes traffic flow in terms of individual actors or a continuous flux of information in a system. The system itself can be seen as a digraph where the edges represent the congestion index.

If you want to model car crashes and accidents, then you would want to use a microscopic model. If you want to zoom out and observe the general flow of information from point A and point B through continuous statistical measures like averages and std devs, you’d want to use a macroscopic model.

The thing with bytes and registers is that it is very useful to use a macroscopic model rather than considering each byte transfer individually, although that is still quite useful.

## Three Phase Traffic Theory

A theory of traffic flow invented by Boris K. Congestion can be divide into 2 states: synchronised flow and wide moving jam. Otherwise we have a free flow state.

## Queuing Theory

Invented by Agner Erlang. Also invented telephone traffic engineering (all of it I think?).

What does it mean to queue or line up? Basically:

1. Arrival of data
2. Servicing according policy (e.g. FIFO)
3. Output of data

## ISAs

Instructions are imperative by default on atomic execution environments. This is probably because digital electronics are ubiquitous and hence most modern atomic instructions are built from discrete signals. If it was built from continuous signals, perhaps we could have something quite different, and not imperative. I think its still possible to have "declarative" instructions.

## ISA: Spectre Proto

The spectre ISA is designed for minimalist, functional computing. How do we verify that an ISA is well designed? Well it should be:

- Well represented. That means probably turing complete or total turing complete
- Encourage directness and low overhead. A language that compiles to it would essentially look the same or similar to what one would expect
- Encourage expressiveness. No point in a language that that a billion instructions just to do something small. Should be proportional in a logical human centric manner

## Vectorisation

Array programming is possibly one of the most effective methods of programming. Most non trivial programs can be represented as a sequence of steps that operate on an initially set up set of data.

Treating arrays as first class citizens seems to allow the conciseness that is APL. Lisp and haskell also benefit. If 70% of all code is in for loops, we should be able to convert them to `for_each` iterators and unordered `map`s. With const eval and eager execution we could make a bunch of simplifications at compile time which would allow the resulting code to be more readily vectorised into `vadd` type instructions. Inlining too. As long as theres no "fixed" operations like `sleep()` that places a certain restraint during execution to not allow simple vector ops.

---

## Halting Problem

The halting problem is quite simple yet complex. It can be applied to many situations. Many types of programs can be reduced to a formulation of the halting problem, and it is useful in ensuruing a program doesn't just hang there doing nothing.

Of interest are total functional programming languages. These langs are "provably terminating", i.e. you can guarentee statically that they will eventually halt.

What if, an ISA itself could implement a total functional language that bypasses the halting problem? Or perhaps a compiler?

## Axioms

As a formal science, LSD aims to be rigorous.

1. Flux
2. Density

---

## Profiling Tools

### Flame Graphs

Flame graphs were invented by Brendan G. and are a great way to visualise fn calls of a program. What you do is insert probes for each function so that each time a fn is called, the time it takes to execute is recorded and summed up, resulting in a mountain chart.

### Perf

Perf is a pretty legit and complete linux profiler that records a bunch of different information and is configurable to get what you are looking for. CPU performance, tracepoints, kprobes (kernel probes), uprobes (user probes).

## What to Profile?

In a modern von neumann computer, we have a CPU, a bunch of memory, accelerator units, ports and peripherals attached to them. What is hard to control is networking, but I think we  can prioritise it. Copying data across disks and devices as well… illusions are probably key, keep the data in memory and pretend that its copied to the device but know that its actually not copied yet.

### CPU

When profiling the CPU, we are mostly looking for an overall %usage metric and perhaps any anomalies in cpu usage over time. E.g. any large spikes or dips may indicate some program or scheduling problem or worse, a hardware problem.

### Heat

We may also be interested in external statistics such as temperature and rate of temperature increase/decrease since they may cause indirect problems with performance, e.g. conductivity-heat relationships with the components. The higher the temperature the more the component would probably have to throttle to not become damaged from prolonged heat stress and inefficiencies due to lower conductivity.

Silicon actually has a pretty high melting point of 1410degC. Copper melts at 1000degC. So your components shouldn’t just start melting anytime soon, and 100degC is quite far. But the heat can seem to cause lattice deformations and damages to small scale features.

## Modular Design

A design principle that subdivides a larger specification into a set of constituent “modules”, that when combined, perhaps in some order, results in the holistic functioning of the intended system.

### Functional Design

A function-centric way to look at modular design and kind of a more generic idea of “functional programming”. Each constituent “part” or module of a device should only have one function with minimum side effects on other parts.

### Parametric Components

To facilitate communication between each component, a component may require or request functionality from another component via a system of arguments.

## User Centric Design

The goal of the product is for the user to use and approve of. Not to abuse or be a danger to them and the environment. So the best way to check off the criteria is to ensure it actually works in reality. If a user finds something dynamic, then goal achieved. The problem is if they find it dynamic for some other reason. We want to be able to directly correlate market success with design and implementation.

## Pseudo-Dynamism & Continuity/Dynamism Simulation

Sometimes its quite hard to make a system feel dynamic. In that case, it is possible to consider ways to “simulate” dynamism so that despite the underlying system being mostly static, the resulting product still feels refreshing.

One area where this can be applied is video capture through discrete frames. Even though all we’re doing is looping through each frame, if we do it fast enough and capture each frame close enough to the next, it results in something that looks continuous and “dynamic”. This can also be applied to animations and computer screens which output GUIs and games. The underlying systems are complex and seemingly static like gpus, cpus, busses, video cables, monitors, etc.

---

## Pt 2. Language Design

How do we apply dynamic design to programming languages to make them more elegant and dynamic to the programmer?

## Polymorphism

Instead of writing each piece functionality separately for each type, maybe there is a way to unify similar functionality over different types? Perhaps we could write an interface which types can implement and automatically inherit.

### Ad Hoc Polymorphism

Usually involves method shadowing and virtual function lookup. Bad idea cause generally extra steps involved and not as optimisable statically. May save some memory? Nah cause your implemented functions are different instances anyway. AD hoc polymorphism does not have to be a fundamental part of your type system. You just need a way to to make functions do separate things when applied to different types. Fn overloading and Op overloading can be implemented via ad hoc polymorphism.

Naively, languages implement dynamism ad hoc with runtime-dynamic code (RDC). This is simple and intuitive for the programmer and may result in less code generated, promoting cache friendliness. However, ad hoc runtime dynamism usually has a higher overhead since it has to do more checks, e.g. dynamically check a variable. This can be mitigated through effective caching of already computed values, lazy evaluation, common path speculative execution, branch prediction.

By doing so, we get “dynamic programming” which involves techniques to cache computed results that are expected again in the future, preferably many times more, otherwise the caching cost might not be worth it. There are many ways to exploit ad hoc runtime dynamism and optimise it work well on a specific platform.

### Parametric Polymorphism & Monomorphism

Parametric programming is when the behaviour of a function is similar regardless of the types its operating on. Perhaps you require the types to be restrained in a particular way; the type itself is irrelevant, only its derived or implemented behaviours which match a specific class of behaviours.

## Not a Science

So even though concepts like static and dynamic dispatch exist, they are not a science. People will say “generally do X” or “generally do Y in this other case”. They won’t say “do X in a Z manner to gain a 20% decrease in overall latency in system S”, because 1. its quite complex, 2. we want general advice and there are many different platforms, 3. it hasn’t been studied formally.

## Kernel Architecture: Utility, Security, and Performance

Kernels are a key part of a useful computing system. There have been many kernels implemented as a part of a greater system, e.g. an operating system. Such kernels include linux, bsd, nt, sun, dos kernel, etc. These kernels have been developed into their modern counterparts and widely used in GNU/Linux, Android (Google/Linux), Windows, MacOS, FreeBSD, and other smaller embedded systems. Some systems like the Pi may also have a small RTOS based on something like RODOS or ThreadX.

Newer kernels of interest include a myriad of RTOS's, fushcia (google), sel4, kataos (google), custom console kernels.

### Utility & Security

Kernels are built to be useful. Otherwise, you could just run apps directly on a system. It would prob be more problematic since you would have to use the direct abstractions. Or develop a library to communicate with the hardware directly. But how would you then ensure everything works properly and noone takes up too much time and compute? Well you could have a mediator program. But that mediator program could basically be then seen as a kernel. I believe modern kernels are more like mediators rather than abstractors.

In neutron, the kernel itself doesnt provide any abstractions. It's main job is to setup everything safely (its code is verified) and let others provide 99% of the functionality.

### Non Utility

Some specific things I dont really like:

- `println` or `print` or `system.out.println`. They assume things like `stdin`, `stdout`, `stderr` which Im not fond of

## Observation

If you could reduce an embarrasingly parallel map or iteration to primitive... computations! You can do it even faster. You could then do things in an SIMD manner. Theres also other ways like struct of arrays.
