---
date: 2022-12-17
name: Jasen Qin
title: Performance Considerations, Pt. 1
url: https://github.com/hyperswine
email: jasen.qin33@gmail.com
---

**What is performance and why do we care?**

That is a great question. Lets attempt to answer that.

## Benchmarks of software

A lot of optimisations can be done in software itself. In my view, 99% of the optimisation should be done in software as a profile for that specific set of hardware. But then again, the code itself should probably be self-optimising in that it scales automatically with the number of execution units and the clock speed of the units.

But by far the factor of interest is memory. Everything to do with memory. Whether that be memory bandwidth (and throughput), access speed & latency. A straightforward view of storage would possibly be a strong benefit for all computing applications.

---

<h2 style={{textAlign: "center"}}>Discuss</h2>

<giscus-widget repo="hyperswine/projects"
        repoid="R_kgDOIZg-sQ"
        category="Announcements"
        categoryid="DIC_kwDOIZg-sc4CSmin"
        mapping="pathname"
        strict="0"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
        crossorigin="anonymous">
</giscus-widget>
