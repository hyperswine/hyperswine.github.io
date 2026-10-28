---
sidebar_position: 2
title: QOS
description: An operating system written in FP-RISC, available as QOS Native and QOS Portable.
---

# QOS

**An operating system written in [FP-RISC](./fprisc.md).** The repository holds QOS Native, QOS Portable, their HAL and services, the QOS programs, and the `qos.py` driver. The compiler and runtime come from a sibling checkout of fprisc.

[Repository](https://github.com/hyperswine/qos) · Status: prototype, under active development

QOS is the reference implementation of the Neutron kernel project.

## What's in it

- **Two forms.** QOS Native, and QOS Portable, which runs inside a host process. QOS Portable also runs on Linux riscv64. The repository records a STAR64 board with HDMI and a keyboard.
- **Main Profile shell.** A graphical shell with onboard apps: a paged grid of shortcuts that you drive with the mouse or keyboard.
- **Editor and programs.** The Editor app can build FP-RISC through a host compiler daemon and run the result as its own process. Programs can be apps in the Elm shape (`std/hosted`) that draw in the Editor's panel and read and write `/home`.
- **An honest isolation model.** Each run gets a memory budget and isn't granted the devices, but this isolation is cooperative, not enforced. QOS has no MMU or privilege boundary between programs, so only run programs you trust.

A `brew install qos-portable` release workflow is planned but not available yet. For now, you build from source.

## Try it

Checked on Debian trixie x86-64 (GHC 9.8.2, cabal 3.12). It needs the same system packages as [FP-RISC](./fprisc.md).

```sh
git clone https://github.com/hyperswine/fprisc ../fprisc
make -C ../fprisc fpr
./qos.py build
./qos.py run tests/hello.fpr
python3 tools/main-profile.py --run      # the graphical Main Profile shell
```

## How it fits

QOS is where FP-RISC turns into a system: the language provides the runtime and machine layer, and QOS provides the HAL, services and apps on top.
