---
sidebar_position: 4
---

# Rei

[Rei](https://hyperswine.github.io/rei) is a minimalist programming language built to for optimal systems design. Backward compatibility is not an excuse, and in Rei, many FFIs and legacy APIs and ideals may not even be supported at all.

Rei allows one to do anything imaginable. It is a beyonder language whose job is to take the hardware beyond unenlightenment.

[Check it out!](https://hyperswine.github.io/rei)

:::info
Libraries:

- `core` and `std`. Stdliberals are needed whether you like them or not
  - `core::arch` for complete wrappers around platform dependent primitives
  - `std::spectro`, an actual functional HDL for building all sorts of hardware
- `arcen`, a very light gui framework

## What can you do?

With less enlightened languages, one may be forced into a specific programming style. I don't mean intentional programming or modular programming. I mean OOP (object oriented pain), 10-line templates, make, etc.

Rei on the other hand, just works. Its base spec is quite simple and does not have many rules. If you want to code for embedded, you choose a low level of abstraction `core`. If you want a higher level, use `std` or your own abstractions ontop of the base language.

This means one can write anything very concisely and elegantly. The compiler does not thow a hissy fit and everything flows (phanta rei). This includes anything ranging from kernels, firmware, userspace tools, full desktop or web apps, games, and scientific computing. The strict, default constness of rei also ensures safety and validity at compile time.

:::tip
Don't know how it works? Try it in `rein`, a lightweight environment built specifically for rei development. It has a full language analyzer (not server) that actively prevents you from doing something potentially bad.
:::

---

<script src="https://giscus.app/client.js"
        data-repo="hyperswine/hyperswine.github.io"
        data-repo-id="R_kgDOGm36XA"
        data-category="Announcements"
        data-category-id="DIC_kwDOGm36XM4CcCgD"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>
