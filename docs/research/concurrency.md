---
sidebar_position: 1
---

# Short Formalism of Concurrency

Concurrency is a pretty damn good idea. What even is concurrency? Think about being able wait for one thing to finish while doing something else. Concurrency is basically just that. Several independent tasks are executing in overlapping time intervals. Parallelism actually implies concurrent execution, but not necessarily the other way around.

Is it possible to formalise concurrency in a way to analyse it more rigorously? Well, yea. People have already done so too.

One way to represent a concurrent system is to simply compose or combine two processes together. How do we represent a process or a program? Well there are also multiple ways. If a program could be described as a regular expression, you could use a DFA. If you want something more powerful, maybe a pushdown automata or a turing machine. But perhaps we dont need to care too much about the code that the program itself runs, but moreso its control flow and access of shared variables. In that case, we could use something like a transition system.

## Transition Systems

From the "Principles of Model Checking", A transition system TS is defined as $(S, Act, \rightarrow, I, AP, L)$. From the symbols you could probably guess what they stand for.

To interleave multiple transition systems together, we could

$TS_1 \parallel TS_2 = (S_1 \times S_2, Act_1 \times Act_2, \rightarrow', I_1 \times I_2, AP_1 \cup AP_2, L_1 \cup L_2)$

So basically combine the initial states. Then get the cartesian product of the states and the cart product of the edges. Also get the new transition relation by basically relating each new state and transition together.

The transition function is quite interesting. Basically for each edge in the first one over some action alpha, you would have an edge in the composed transition system too. Instead of `s1 -> s1'`. You would have `(s1, s2) -> (s1', s2)`. So for a state s1 in the first system, you would see it reflected like m times if there are m elements in the second system.

## Analysis of Systems

We can think about analysis in a few ways.

Maybe integrated vs local methods. From first principles, integrated methods dont seem to bad. You can combine several programs together. Then use an axiomatic proof scheme to check for preconditions and postconditions. That could be a way to verify certain propositional or LTL properties. Eventuality and Globalness are very useful properties.



