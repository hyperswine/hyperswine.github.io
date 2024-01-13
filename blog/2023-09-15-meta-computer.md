---
layout: post
title: Metacomputer
---

The metacomputer is a general type of computer. It is at its most general form, a "thing" that can "usefully" "process" a "chunk of symbols" representing "rules" according to a "chunk of rules".

What does process mean? It means to be able to manipulate the symbols (both rules and data) in some way. It means to be able to change those symbols. Now, if you went like "sleep 5", would that then still be considered a computation? Or maybe a lack of computation? If declared explicitly, then it should be considered a functionality. If a system was waiting for a piece of computation because of e.g. queuing or setbacks, then that probably should not be considered a computation.

Functionalities are the basis for things to be done on a metacomputer. They generalise and batch rules together to create complex things like sorting algorithms, games, etc.

Data-Functionality relationship. All functionality can be seen as just another form of data. Aka some chunk of symbols. But instead of its more neutral properties associated with any other chunk of data, a functionality could be seen as a chunk of symbols that can be interpeted differently or directly by the metacomputer.

Rules. Rules are the atomic "things" that a metacomputer uses to do "useful" things. A rule could simply just be, add 1 to a number. Thereby interpreting a symbol as a number and adding 1 to it. The instruction or symbol(s) that back the rule itself can also be interpreted, by other rules. A primitive metacomputer could have something like a program counter which allows it to automatically process available rules. It could be called a "program basis" that basically generalises the notion of fetching from some store and allocating something to handle it.

A program basis in a hypothetical metacomputer could involve several sets of sub basis'. Like maybe you could have a global syncer and a bunch of local instruction counters or whatnot. Or a dispatcher or scheduler.
