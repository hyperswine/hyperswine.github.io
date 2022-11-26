---
layout: post
title: Digital Electronics
---

## Why digital?

I am primarily interested in electronics used in digital (1s and 0s) applications like computer components. Motherboards, peripherals, hardware. Some of them like speakers may contain some analog components to capture/output the real world, e.g. sound waves, light intensity/wavelength for motion/face detection.

- I would say 90% digital, 10% analog

## Counters

For things like program counters and time keeping.

- Usually a ripple counter that is either async'd or sync'd

### Async Counters (Ripple)

Ripple counter ICs are great for noncritical applications. Not for high frequency applications that require precise timing.

- Probably good for general purpose timing like digital clocks and watches. General stopwatches that dont need to be too precise can also use an async counter. Otherwise stick with a sync counter

### Synchronous Counters

Comes in various MOD arrangements unlike async counters. Also comes with controls for increment/decrement counting.

- Also allows 'parallel load inputs' used to preset the counter to a desired start count. Great as a high precision Program Counter

## Registers

We usually call them 'shift registers' since we stream in an n-bit word and each position 'shifts' to the left or right out and the input in.

- For serial in and out, we have to shift each register bank that contains 1 bit to the right until the entire input is placed in their proper positions. So both reads and writes are slow and 1-bit at a time.
- For parallel in and serial out, we can input to each bank at the same time (for writes). But the existing bits must be shifted out one by one until they are all out (for reads).
- For parallel out and serial in, other way around. Fast reads but slow writes.
- Best: Parallel in and Parallel out. Fast reads and writes.

### Clock

We have to time the instructions so they occur when we want them to. And output on a certain, deterministic way, i.e. a negative edge.

- Most components have a clock input that on the positive edge, tells the component to take in inputs `A`. Then on the negative edge, execute/output `B`. Given the component should be fast enough/not as complex so we can time the whole cycle
