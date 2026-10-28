---
sidebar_position: 4
title: QRepo
description: A local checkpoint tool written in native FP-RISC, with content-addressed snapshots.
---

# QRepo

**A local checkpoint tool written in native FP-RISC**, with content-addressed snapshots and experimental synchronisation.

[Repository](https://github.com/hyperswine/qrepo) · Status: prototype

## What it does

- Init, commit, status, tag, history, diff, show, restore, ignore and gc for a workspace.
- An HTTP remote with a bearer token, supporting clone, fetch, pull, push and conservative merging. It's meant to sit behind a TLS proxy for anything beyond a private network.
- There is no automatic commit, background sync or named branch management.
- Tested on macOS arm64 and Linux x86-64 (Debian trixie).

## Try it

QRepo needs an fprisc checkout next to it (built with `make fpr`) and the OpenSSL headers.

```sh
sudo apt-get install gcc libssl-dev curl python3
./build.sh                                   # builds ./qr
./qr --root /tmp/ws init
./qr --root /tmp/ws commit "first checkpoint"
./qr --root /tmp/ws history
```

## How it fits

QRepo is a program written in [FP-RISC](./fprisc.md)'s Base profile, built on the same standard library and runtime.
