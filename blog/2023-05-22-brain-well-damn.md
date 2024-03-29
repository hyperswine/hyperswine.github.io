---
layout: post
title: Well, Damn
---

I cleaned up this space a bit recently. Many things have happened since then. I think I let my uninformed imagination get to me quite often and its hard to know when your just making up some random stuff in your mind or when you actually stumbled upon something significant. The CSTC circuits and gut-brain axis can make humans do some stupid things, whether that be getting too tense or anxious about some random stuff or freezing them in place, repeating such a cycle.

And AI. Well guess my predictions came to be true. GPT really is becoming the new thing everyone will not stop talking about. Whether that be scientists, the ignorant masses or scammers.

I don't really know what's going to happen anymore, I feel quite conflicted and chaotic. My mind never ceases to bring up some bizzare  thought. Its like the more I do what I do, the less I feel like I really know anything at all. Like Im trying to become so open minded, considering all the possible timelines, technologies, cases, reasons for things happening that my brains have fallen out.

Persistent data structures? Functional programming? Dataflow programming? Logic programming? Proofs? Concurrency? Metaprogramming through metaobjects? Macros? Procedural programming?

Haskell? Scala? Clojure? Racket? Idris? APL? Rust? Pharo? Prolog? Mercury? Julia? Python? Elixir? Erlang? ATS?
All such languages have their pros and cons, especially on the current hardware-software landscape. Many were developed to work with existing APIs or ways of thinking. I think research languages like haskell and coq are better in this regard, so as languages like APL and smalltalk. With regard to intergration with existing interfaces and simplicity, python takes the cake, and perhaps julia too. Many tools are built using python, like APT.

I don't know what I even want either. I feel like I get quite nervous sometimes when coding and Im unable to do something that would be usually quite straightforward, even something as simple as reading the error messages from compilation with langs like haskell. That being said having easier interfaces would probably quite beneficial. Mojo might be a decent language if it gets released... apparently its quite fast and fixes some of python's issues.

I think I want something like python and haskell with rust level static analysis and safety. The simplicity and expressiveness when coding in python feels unmatched. Perhaps its also because I feel more familiar with it, like rust. But Im also quite familiar with C, C++, and JS but I dont really feel like those are as good to write in and I make frequent mistakes in them. Having optional types might be a big factor. As well as a single interface to write collections in. Whether that be specifications like a struct or an array of values or a combination. I think idris does particularly well in that regard.

I also want to be able to match on simple maths logic like `x - y > 0` on a single arm like:

```rust
match x, y
    case x - y > 0 => ...

// in addition to
match x, y
    case (1, 0) => ...
```

Scala's unapply is also quite cool, I haven't made much use of it but I feel like this way of thinking is quite ingenious (I think haskell has it too).

```scala
AddOne:
    x: _
    y: _

    match: (x, y) => Self(x+1, y+1)
```

Im not quite sure how I feel about smalltalk's metaobject and everything is an object thing. I dont see much of a reason to add methods at runtime, but checking what methods you do have could be useful. That would add to the runtime storage overhead but ehh. Apparently it could be quite useful to modify the method definition at runtime if there's a bug or something. Maybe attach a remote debugger and tell the VM to change the object's method. Kind of like self modifying code as well I guess. It could be quite useful for security and pushing new features, but I have yet to see it in practice. In theory you could push out an updated method to all running instances quite trivially, without having to recompile or restart the system. Combined with a very simple, resilient hardware system, it could be a very potent method of running programs.

Im also not quite sure about logic programming. On one hand, it seems quite powerful and concise in terms of representing classes of problems related to knowledge bases and queries. On the other hand, I dont really think its better than functional programming implementations like haskell at writing up complex logic for dealing with lists. I think an observation here is being able to easily express logic to deal with multi dimensional arrays. Python isnt too bad at it, but the syntax can be a bit confusing when people use `arr[1, 2]` or when you have many dimensions and you have to keep track of what dimension it is in. Perhaps something like `rust-analyser` could help here with its automatic annotations, which could be applied to tensor accesses statically or dynamically. Maybe something like an `ith` dimension, and the server is smart enough to detect a shortening of the dimensions for example to `i-1`.

Im not sure about proofs. It seems like you can pretty much prove everything, though the turing decidability problem is a limiting factor. So you could have something where you are able to prove 99% your functions terminate and even "statically" evaluate calls if they wont take up too much space. And decompose functions from a complex form to a simple form. Maybe through graph theory or HoTT. I heard its possible, through generating different, simpler functions and testing that against the original. Paired with randomised algorithms, the sky looks blue. Dependent types are also often talked about in proofs, and is a key component it seems, at least if you want static proofs. Theres total functional programming which actually seems quite good too, but if I will sacrifice expressiveness for it, then nevermind. It seems like the gist of most proof languages involve annotating down a function to ensure that the recursive case eventually reaches the base case through e.g. decrementing the required value at each step. There can not be any steps where you might or might not return a value, you must do so, and that value must get you strictly closer to your goal by some non-zero amount.

Verification is another thing. I haven't tried out a verification tool yet so I dont really know how to make of it. Some say its a waste of time. Some say its only good for things you want to not fail under any circumstances, like a plane's software or a hospital. I think I should look into it some more, but if your model or spec is flawed, wouldnt your software be too?

Performance. Ive looked a bunch of articles and like... damn. Performance seems very hard to get right in the current software-hardware landscape. Whether that be through compiler optimisation, syscall optimisation, algorithmic optimisation, adding more potent hardware, faster and more memory, etc. On the compiler optimisation front, you have tons of ways to make a program potentially faster, often at the cost of more memory usage (time-space tradeoff). Sometimes though it could be as simple as removing redundant instructions and memory accesses, or batching them together. Maybe prefetching too, but tbh I haven't seen it been used myself, though I think LLVM should insert them (it goes against lazy evaluation though I think). I also dont even think high performance is that much of a problem. Rather its more like consistent, good enough performance. I would much rather play a game on a consistent 30 fps than having FPS spikes and valleys from 40-80fps even though the latter has a higher average fps. I also dont pay attention to variable resolution as long as its not too big of a gap, which means the flow of content is probably much more important than its sharpness or detail.

To that end, on the consistent performance front, it might be good to start off with a lazy language and a deterministic set of hardware and low level interfaces. The scheduler could possibly use a randomised algorithm though, which can be a bit ironic but my intuition tells me it could work out quite well.
