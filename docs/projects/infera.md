---
sidebar_position: 7
title: Infera (NeoProlog)
description: Infera, a Prolog-inspired logic programming language implemented in Haskell.
---

# Infera (NeoProlog)

**A Prolog-inspired logic programming language implemented in Haskell.** It has declared or inferred sorts, modes and determinism, indexing and tabling on by default, cut and if-then-else, a simple CLP(Z) solver, DCGs, and a hash-addressed module system.

[Repository](https://github.com/hyperswine/NeoProlog) · Status: v2 (the previous engine is on the `v1` branch)

## Highlights

- `infera check` resolves imports and reports undefined predicates, arity errors, singleton variables, shadowed builtins and more, with `--json` output for editors.
- A VS Code extension with a language server.
- Tracing with `infera --trace`.

## Try it

On Apple Silicon with macOS 15 or newer:

```sh
brew install hyperswine/tap/infera
infera --version
infera file.nprolog      # load a file, run its inline queries, then open the REPL
```

To build from source: `cabal build && cabal install`.

## How it fits

Related writing: [Higher Performance Prolog](/blog) on the blog.
