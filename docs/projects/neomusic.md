---
sidebar_position: 6
title: NeoMusic
description: Algebraic music notation in Haskell. .neomusic scores render to audio, MIDI and piano sheets.
---

# NeoMusic

**Algebraic music notation in Haskell.** A `.neomusic` score is a small set of uninterpreted primitives (pitch, duration, gate, and signals over a note) plus ordinary functions over them. Bar lines, letter names and numeric notation are views, not semantics.

[Repository](https://github.com/hyperswine/neomusic) · Status: released (Homebrew tap, builds from source)

## Highlights

- Renders to WAV, MP3 or FLAC audio, to MIDI, and optionally to LilyPond piano sheets.
- Recorded instruments (VSCO 2 CE, Salamander piano, Meta guitars) through SFZ maps, plus room impulse responses. A checksummed script fetches the samples, which are kept outside the repository.
- Hedgehog properties and LilyPond golden tests.

## Try it

```sh
brew tap hyperswine/neomusic && brew trust hyperswine/neomusic
brew install neo-music
neo-music play song.neomusic
neo-music render song.neomusic -o song.flac
```

The tap builds from source with `ghc@9.8` and depends on `ffmpeg`. From a checkout, `cabal run neo-music -- play examples/neomusic/twinkle.neomusic` works too.

## How it fits

Another Haskell language tool: a small core, with everything else written as ordinary functions. It was split out of HaskPlayground.
