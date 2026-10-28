---
sidebar_position: 0
title: What I'm building
slug: /about
description: An overview of what I'm building and how the projects fit together.
---

# What I'm building

Most of my time goes into a small stack of systems built from the language up, along with a few standalone language tools written in Haskell.

```text
  Apps and tools      QRepo, QOS programs
        │
  QOS                 Native · Portable
        │
  FP-RISC             compiler · runtime · std
        │
  Targets             x86-64 · AArch64 · RISC-V · SimpleRisc (FPGA)

  Standalone Haskell tools:  coscad (CAD) · NeoMusic (music) · Infera (logic)
```

- **[FP-RISC](../projects/fprisc.md)** is the language. Its compiler emits native code from typed IR for RISC-V, AArch64 and x64, and its profiles (Builtin, Base, ExtBase) scale from bare metal up to ordinary hosted programs.
- **[QOS](../projects/qos.md)** is the operating system written in FP-RISC. It runs natively, or portably inside a host process.
- **[SimpleRisc](../projects/simple-risc.md)** is a RISC-V core in Clash on a Tang Nano 20K, and the FP-RISC runtime runs on it.
- **[QRepo](../projects/qrepo.md)** is a checkpoint tool written in FP-RISC.
- **[coscad](../projects/coscad.md)**, **[NeoMusic](../projects/neomusic.md)** and **[Infera](../projects/infera.md)** are standalone languages for CAD, music and logic programming.

## Lineage

FP-RISC grew out of the Rei language prototype and is the first reference implementation of NewML, QOS is the reference implementation of the Neutron kernel, and SimpleRisc is the soft prototype of the Spectre hardware system. All of these are eventually part of Quanti, an open source vertical project.

Everything is on [GitHub](https://github.com/hyperswine). See [all projects](../projects/index.md), or the [résumé](./resume.md) for background.
