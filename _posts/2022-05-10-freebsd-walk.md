---
layout: post
title: FreeBSD Code
---

## Overview

The FreeBSD directory structure is quite cool.

In order to build freebsd, run:

```bash
make TARGET_ARCH=aarch64 -j 8 buildworld && make TARGET_ARCH=aarch64 -j 8 buildkernel
```

The core of the logic seems to be in `/sys`. In there, are code for each supported arch. And possibly some glue code for `make` to find the right arch specific code when building for a specific target, then extract and paste onto the relevant non arch depedent section.
