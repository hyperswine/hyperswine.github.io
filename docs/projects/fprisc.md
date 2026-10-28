---
sidebar_position: 1
title: FP-RISC
description: The FP-RISC language implementation, with a compiler, the Sol interpreter, libraries and a bare-metal runtime.
---

# FP-RISC

**The FP-RISC language implementation**: the compiler, the Sol interpreter, the language libraries, checks, and a standalone bare-metal runtime. The compiler is written in Haskell.

[Repository](https://github.com/hyperswine/fprisc) · Status: under active development

FP-RISC came out of the Rei language prototype and is essentially the spirit of it. It can also be seen as the first reference implementation of NewML, a new language in the ML family (alongside SML and Haskell).

## Design

- **Native code from typed IR.** Native ahead-of-time compilation goes through verified typed IR, with direct selectors for RV32/RV64, AArch64 and x64.
- **Profiles.** Each file says what it is written against (`profile builtin.`, `profile base.` (the default), `profile extbase.`, `profile sol.`), or it can use `unsafe base.` to mark itself blanket-unsafe. The compiler is told where the program runs: `--system=bare-metal | qos-native | qos-portable | posix`.
- **Base: ordinary programs.** `fpr build` produces an ordinary executable for the host (x86-64 or AArch64 on Linux/macOS, or RV64GC on Linux). It uses the same core runtime as bare metal, with libc as the board.
- **A machine layer.** `machine/virt`, `machine/posix`, `machine/builtin` and `machine/unix` describe what the runtime needs from each system: boot, context switching, a console byte, the doorbell and the timer. Device drivers belong to QOS's HAL.
- **Bare metal and memory.** There is an unsafe, scheduler-free RV64 build with a memory and bit API, and a machine primitive API for CSRs, interrupt masking, atomics and fences. Automatic ARC for first-order Builtin programs is experimental.
- **More targets.** Cross-builds for Linux RISC-V (`--target=linux-riscv64`), x86-64 Mach-O on any Mac (`--target=macos-x86_64`), and ESP32-P4 through ESP-IDF (`fpr run prog.fpr --host=esp-idf`).

## Try it

Checked on Debian trixie x86-64 with GHC 9.8.2 and cabal 3.12 from [ghcup](https://www.haskell.org/ghcup/). The repository README covers macOS setup.

```sh
sudo apt-get install make gcc pkg-config python3 libgit2-dev libarchive-dev \
  libegl-dev libgl-dev libgmp-dev zlib1g-dev
cabal update
make fpr                                  # builds ./fpr
./fpr sol sol/examples/tabling.sol
./fpr build tests/base/hello.fpr -o hello && ./hello
```

## How it fits

FP-RISC is the language underneath most of my systems work. [QOS](./qos.md) is written in it and is developed in a separate repository. [QRepo](./qrepo.md) is a native FP-RISC program. [SimpleRisc](./simple-risc.md) runs the FP-RISC runtime on an FPGA.
