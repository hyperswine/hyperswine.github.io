---
date: 2022-12-17
name: Jasen Qin
title: Scala Book
url: https://github.com/hyperswine
email: jasen.qin33@gmail.com
---

## Scala, A Versatile and Expressive Language

Scala is highly versatile and expressive. It includes features from object oriented programming, functional programming, metaprogramming (reflection and macros) and compiles to java bytecode. It is able to operate quite well with java libraries and is one of the main sticking points.

Scala 3 has many great improvements, including syntax and features. The introduction of python-style indentation sensitive blocks is such an ergonomic decision. But feature wise, we have some very important and useful things:

- Top level `def`s. It is now possible to do `def` at a top level
- Actual algebraic datatypes with `enum`s
- Dependent function types through directly using a value in a parameter and `{type}` annotations
- Given imports

## Modelling

Scala's extensive support for OOP and FP make it very expressive for modeling many different types of scenarios. ADTs make it easy to model static domains where there's hierarchical data or data that can exist in multiple different forms.

```scala
// algebraic data types
class ADT:
  case Case1
  case Case2

// same as
class ADT:
  case Case1, Case2
```

Functions in scala can be curried (multiple parameter lists) and in scala 3, can declare types that can be parameterized over values.

```scala
class SomeType(val data1: Any, val data2: Any)

// ensure that the resulting type has the same value in the data1 field
def f(a: Int)(b: SomeType): SomeType(b.data)
```

## Common Issues

**Note**

Many issues that you come across while developing with scala can often be easily identified and solved, especially if you are using a modern dev environment with an LSP (Metals). Being able to pay attention to the error messages that you get in the `PROBLEMS` panel on VSCode and that is about half of the work already.

Now there are some more tricky and complex problems that can often arise, many of which are not really even object level issues, but rather meta level issues. Perhaps you screwed up your SBT configuration, if so, metals should tell you all about it in the output section.

**Gotchas**

In scala, there's a bunch of things that can really get you if you don't really know the semantics of the language deeply. Common ones include:

**Class parameters**:

```scala
class C:
  r: Int // scala is not java, this is not idiomatic. If you want something like this you would parameterize the class itself 

// like so
// but this makes `r` a private, immutable field
class C(r: Int)

// what you probably want is
class C(var r: Int)

// but what you probably should have is
class C(val r: Int)
```

**Case Classes, ADTs, Pattern Matching**

In Scala, ADTs and Pattern Matching have a bit different of a syntax than other languages but is mostly the same in terms of pattern matching semantics. The thing is you can do case classes, which I think is very powerful but also a source of issues.

```scala
class C

// error! B requires a parameter list
case class B extends C
// correct
case class B() extends C

// error! when we parameterize an ADT, we need to specify the arguments for each variant
class ADT(val v: Any):
  case Case1
  ...

// like so
class ADT(val v: Any):
  case Case1 extends ADT(1)

// error!
class ADT:
  case Case1(v: Any, k: String)

// if you want extra data, do
class ADT
case class Case1(v: Any, k: String) extends ADT
```
