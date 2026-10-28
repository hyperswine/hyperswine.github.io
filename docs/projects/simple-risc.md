---
sidebar_position: 3
title: SimpleRisc
description: An RV32IM(C) soft processor in Clash, tested on the Tang Nano 20K FPGA.
---

# SimpleRisc

**An RV32IM soft processor written in [Clash](https://clash-lang.org).** It has an optional compressed (C) frontend, machine mode, a CLINT and PLIC, a boot ROM, and SDRAM and PSRAM variants, all tested on the Tang Nano 20K.

[Repository](https://github.com/hyperswine/simple-risc) · Status: active, with a roadmap toward a full RISC-V core

SimpleRisc is the soft prototype of the Spectre hardware system.

## Highlights

- Unmodified GCC output and the FP-RISC runtime run on the board.
- The core passes the official riscv-arch-test suites that fit in its RAM.
- Serial and pipelined 8 MiB SDRAM images with a cache, plus an RV64 variant.
- An independent `Rv32Model` reference interpreter, with Hedgehog differential tests.
- Formal safety models in Maude for the cache, instruction fences and branch prediction. Each deliberately injected fault has to produce a counterexample.
- It builds with the open-source flow (yosys, nextpnr, openFPGALoader) or the vendor Gowin flow.

## Try it

```sh
cabal build all
cabal test
cabal run clash -- -isrc -hide-package simple-risc src/SimpleRisc.hs --verilog
```

The board scripts under `boards/tangnano20k/` handle synthesis and flashing.

## How it fits

SimpleRisc is the hardware target for [FP-RISC](./fprisc.md). The `fprisc-48` preset builds an RV32IMC SDRAM pipeline for FP-RISC development, and fprisc's Tang Nano tests expect this repository checked out next to it.
