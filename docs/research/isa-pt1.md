---
date: 2022-12-18
name: Jasen Qin
title: "Instruction Set Architecture from First Principles: Part 1"
url: https://github.com/hyperswine
email: jasen.qin33@gmail.com
---

Instructions are imperative by default on atomic execution environments. This is probably because digital electronics are ubiquitous and hence most modern atomic instructions are built from discrete signals. If it was built from continuous signals, perhaps we could have something quite different, and not imperative. I think its still possible to have "declarative" instructions.

## ISA: Spectre

The spectre ISA is designed for minimalist, functional computing. How do we verify that an ISA is enlightened? Well it should be:

- Well represented. That means probably turing complete or total turing complete
- Encourage directness and low overhead. A language that compiles to it would essentially look the same or similar to what one would expect
- Encourage expressiveness. No point in a language that that a billion instructions just to do something small. Should be proportional in a logical human centric manner

## Vectorisation

Array programming is possibly one of the most effective methods of programming. Most non trivial programs can be represented as a sequence of steps that operate on an initially set up set of data.

Treating arrays as first class citizens seems to allow the conciseness that is APL. Lisp and haskell also benefit. If 70% of all code is in for loops, we should be able to convert them to `for_each` iterators and unordered `map`s. With const eval and eager execution we could make a bunch of simplifications at compile time which would allow the resulting code to be more readily vectorised into `vadd` type instructions. Inlining too. As long as theres no "fixed" operations like `sleep()` that places a certain restraint during execution to not allow simple vector ops.

## Halting Problem

The halting problem is quite simple yet complex. It can be applied to many situations. Many types of programs can be reduced to a formulation of the halting problem, and it is useful in ensuruing a program doesn't just hang there doing nothing.

Of interest are total functional programming languages. These langs are "provably terminating", i.e. you can guarentee statically that they will eventually halt.

What if, an ISA itself could implement a total functional language that bypasses the halting problem? Or perhaps a compiler?

---

<h2 style={{textAlign: "center"}}>Discuss</h2>

<giscus-widget repo="hyperswine/projects"
        repoid="R_kgDOIZg-sQ"
        category="Announcements"
        categoryid="DIC_kwDOIZg-sc4CSmin"
        mapping="pathname"
        strict="0"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
        crossorigin="anonymous">
</giscus-widget>
