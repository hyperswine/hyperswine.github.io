---
sidebar_position: 1
---

# Dynamic Design Theory

**By Jasen Qin.**

How does one design a dynamic system according to its intrinsics? Is there a generic higher order way to reason about it? We want optimise for low latency, high throughput, while maintaining a sense of control and elegance over the model.

---

## Pt 1. Precursor Fields and Related

## Latency Sensitive Design (LSD)

LSD is a related field of DDT concerned with putting latency as the fore.

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
