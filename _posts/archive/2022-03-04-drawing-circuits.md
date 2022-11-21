---
layout: post
title: Drawing Circuits
---

## How to draw a schematic

1. Place input wires on the left. Outputs on the right. Positive supply terminals at the top and negative terminals at the bottom.
2. Separate functional groups from each other. So amplifiers, input stages, filters, etc. should have a bit of space/2 nodes between then. Easier to detect problems during testing.
3. Given all circuit components symbols like R1, C3, IC4, etc. Label them with the exact size, e.g. 100k, 0.1uF. And if available, the type, e.g. 2N2222, 741.
4. Use abbreviations for large valued components. Shorten to 100k from 100,000, 100M from 1 million. Common ones: p, n, u, k, M.
5. Place lead designations like pin numbers on the outside of the device symbol. Place the name of the device on the inside. `--<pin0>--[ <component_name> ]----`.
6. Include power supply connections to op-amps/digital ICs even though most people just assume there there. So just 2 terminals connected to a + - supply
7. If wires join, place a dot at the intersection. Otherwise dont.
8. Always prototype on a breadboard before drawing a PCB. You can also use a perforated or wire-wrap board instead of a PCB if its a second prototype.

### Helpful

- Draw a general shape of the waveform of the circuit (input and output) and place it next to certain parts of the circuit diagram. Helpful for testing.
- Include your name, the circuit's name (a descriptive one), and a date. Then if you want to make revisions, add another block (like git), update the date and perhaps add a `v1, 2 ...etc.`.

## Negative Feedback

Send the resultant voltage back to the negative terminal of the op amp. Allows the negative voltage to be balanced by the positive voltage, if the positive-negative difference is too high (reaches above the threshold set by the feedback resistor).

- basically, we are unloading some of the excess pressure by piping it back to one of the input pressures to try and balance both input pressures

## Positive Feedback

Send the resultant voltage back to the positive terminal of the op amp. Allows the positive voltage to be balanced by the negative voltage.
