---
layout: post
title: Higher Peformance Prolog
---

Lets think about how we can make a high performance implementation of Prolog.

I think certain annotations like mode declarations and input output declarations can help.
Those will be optional. What I dont want is types I think, that would definitely make it less prolog-like.

If not using the cut operator, maybe prolog predicates could be mapped to SAT problems relatively simply.
If so, external high performance SAT solvers could be used.

1. Parallelism using lightweight greenthreads and maybe a userspace threading library could help.
Like it could basically identity independent parts of the program and aggressively try to parallelise them.
Too fine grained, probably not good. Especially considering the processors we use right now.

Per-Goal Basis: Parallelizing on a per-goal basis could be a promising approach. Each goal in Prolog can be considered a reasonably self-contained unit of computation, making it a good candidate for parallel execution. Maybe do dependency analysis on each goal beforehand to see if you can parallelize it "embarrassingly" or might require extra synchronization.

Lists and collections could potentially be parallelized at a very fine level of granularity in terms of vectorized instructions.
One could annotate that a list of N elements of integers could be represented as say a list of N 32-bit integers, and be represented in a tightly packed array that could be easily amenable for vector operations like vector addition.

Could complicate backtracking quite a bit. Might require synchronization.

Biggest issue is I think the fact that modern processors are kind of setup for coarse grained parallelism, on a per-process basis.

2. More efficient backtracking. Not sure what it might look like. Maybe some hueristics and things to make searching potentially more optimal.

Backjumping and Learning: Instead of traditional backtracking, use techniques like backjumping, where the system jumps back more than one level in the search tree when a dead end is reached. Learning from failed paths to avoid similar paths in the future can also be efficient.

Heuristic methods can be very effective but require domain-specific knowledge.

3. Maybe type inference where possible. By assigning concrete types, just in time to queries, it could make the code more lightweight if we can map the values to primitive data types like 32-bit integers rather than abstract objects.

How to do this? It feels like some cases could be easier and straightforward while other cases harder. The general plan is to be able to map complex prolog data and values to low level primitives.

```pl
%% what is T? in normal prolog, it would just be a generic type
%% but we can infer from the use of T in t(T)
x(T) :- t(T).

%% t is defined here as 1 and "x"
%% that means statically we can say that t(T) where T = union(num, string)
%% since we are only given a value = 1 for num, we can further optimize and say num = int8
%% x is also a single string, and we could turn that into an vector of 1-byte each to represent ASCII because we dont need UTF-8 encoding
%% we could also choose to further optimize string down to a single char rather than a vector or array, since we are only given a string with 1 element
t(1).
t('x').
```

In this example, we can apply type inference based on the original data available. However, if the database changes, like we `assert` something into the database:

```
t(y(z)).
```

This could then change the type of `t(T)`. Does that mean we should then recompile our initial program to change the type signature and the way that `t(T)` and all the predicates that depend on it work?

Version it, and recompile. Maybe not even version if we dont want, but can easily also redo it or use the existing predicate and only recompile on demand if the new version actually should get used.

Maybe we can mark it as dirty. Then use the dynamically typed version while it is recompiling. The shell could show something like `(detected new type... recompiling)`.

4. Ad hoc optimizations.

Maybe we could optimize on the fly based on the types of queries we receive.

5. Memory Management

Maybe using linear types or uniqueness types a la rust could be useful for memory management. Since we are basically threading data into goals, we could dont have to make copies of the data each time.

**Linear types**, **CPS** and **primitive data type inference** could all be useful for reducing memory load and increasing cache efficiency.

Maybe more aggressive tabling, and tabling by default.

6. Semantics Changes

Maybe instead of treating predicates like function calls with stack frames. We instead use a continuation passing style where we are always threading the caller context through to the next caller, so that it can return if need be. We basically pass the current continuation to the next.

But will probably still use stack frames for keeping track of local memory, unless we dont create more data.

Hybrid Approach: CPS could be used selectively for performance-critical parts of the code, while keeping traditional stack-based execution for other parts.

7. Concurrency Features at Hardware Level

Generally cores right next to each other in the processor TOPOLOGY can much more quickly communicate with each other, by factors of 10x. Its already not too bad, like 20ns to 100ns. But it might be hard to directly schedule threads that are topology aware, generally the OS's job since it exposes a thread API.

8. Spatial and Temporal Optimizations

Tightly packing collections into say an array like structure or struct of arrays could be quite cogent.
Maybe try to use hueristics to invoke a goal that would be physically and temporally close to goals that already exist.

Specialized data structures.

9. More Extreme Considerations

Maybe GPUs and tensor processsing hardware could be used instead. It might add more latency, but could be highly effective for workloads where it is more about searching and simple computations than sequential execution.

Parallel Search and Pattern Matching: Prolog's search and pattern matching operations, which are often highly parallelizable, could greatly benefit from GPU acceleration. GPUs, with their thousands of small cores, are adept at handling such massively parallel computations.

Data-Intensive Operations on large sets of data, especially those that involve simple, repeatable computations (like processing lists or arrays), can be significantly sped up on GPUs.

Standard vs. Accelerated Predicates: Offer both standard predicates like maplist for CPU execution and specialized versions like maplist_accel for GPU-accelerated execution. This allows the programmer to explicitly choose the acceleration for computationally intensive tasks.

Use Julia for interop and calling external things, not C, or C but ensure that it is very portable.
Or compile the julia program to C and link that. Probably going to have to use julia to interact with LLVM.

## Syntax

I also think it could be an opportunity to potentially improve the syntax in an optional manner. Like you can also make it use a whitespace sensitive approach where you dont have to use `,` to compose statements in CONJUNCTION. And instead of `predicate(Args...)`, use `predicate Args...` in certain contexts like elixir.

With whitespace sensitivity, the `.` period could also be omitted in some contexts.

I think having higher order predicates like `P1(P2(Args...))` where P1 and P2 are parameters is also a must. Maybe builtin lambda functions too, but Im not sure, that might make it not work very well with existing implementations. Maybe just the `yall` library in SWI-Prolog is good enough, prolog is not a functional programming language.

So this would be valid

```prolog
ancestor X Y :- father X Z, father Z Y
%% or
ancestor X Y :-
  father X Z
  father Z Y
```
