---
sidebar_position: 5
title: coscad
description: A concise CAD language in Haskell that compiles to OpenSCAD, with assembly and manufacturing stages.
---

# coscad

**A concise glyph/pipeline CAD language in Haskell.** It compiles to OpenSCAD (optionally BOSL2), and it has an assembly layer plus a manufacturing stage that emits print-ready STLs, one per bed. The compiler computes anchors, beziers, attachments, fit, orientation and packing, so the emitted OpenSCAD and the slicer downstream can stay simple.

[Repository](https://github.com/hyperswine/coscad) · Status: released (Homebrew, GitHub releases)

```
.coscad   ──compile──▶ .scad ──openscad──▶ .stl        (one part)
.assemble ──coscad───▶ asm view + plate + _design.json (design)
.assemble ──coscad next▶ bedN.stl + _manifest.json     (manufacturing)
```

## Highlights

- A native geometry kernel (Manifold plus Clipper2), so `stl`, `check` and `next` render without OpenSCAD by default.
- Printability checks covering bed contact, overhang and slenderness, plus interference and clearance checks on real meshes.
- `coscad stress` reports deflection, peak stress and a safety factor from a part's support and load lines.
- `coscad plan` produces numbered build steps, a BOM and step scenes. `coscad site` builds a phone-first static site of the steps.
- Compile-time errors with `file:line:col`, and a VS Code extension.

## Try it

On Apple Silicon with macOS 15 or newer:

```sh
brew install hyperswine/tap/coscad
coscad --version
coscad doctor
```

Prebuilt macOS and Linux archives are attached to each [GitHub release](https://github.com/hyperswine/coscad/releases), and you can also build from source with cabal.

## How it fits

coscad is one of my standalone Haskell tools. It does not depend on FP-RISC, and it covers the path from CAD source to a 3D printer.
