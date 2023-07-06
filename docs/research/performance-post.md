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

I ran this program on rust:

```rust
use std::thread::sleep;

use libc::c_void;

macro_rules! time_function_100 {
    ($f:expr) => {
        time_function_n_times($f, 100);
    };
}

fn main() {
    println!("Reading 100 times----\n\n");
    time_function_100!(time_read_to_string);
    println!("Writing 100 times----\n\n");
    time_function_100!(time_write_to_string);
}

fn time_function_n_times(func: fn(), n: usize) {
    for _ in 0..n {
        // start time
        let start = std::time::Instant::now();

        // call function
        func();

        // end time
        let end = std::time::Instant::now();
        // difference
        let diff = end - start;

        sleep(std::time::Duration::from_millis(100));

        println!("time: {diff:?}");
    }
}

fn time_read_to_string() {
    // make a syscall, READ Cargo.toml
    let _ = std::fs::read_to_string("Cargo.toml");
}

fn time_write_to_string() {
    let _ = std::fs::write("test.txt", "hello world");
}
```

and got these results

```bash
Reading 100 times----
time: 31.042µs
time: 70.792µs
time: 148.541µs
time: 496.125µs
time: 170µs
time: 179.959µs
time: 177µs
time: 166.542µs
time: 147.75µs
time: 111.708µs
time: 47.708µs
time: 78.167µs
time: 76.833µs
time: 264.291µs
time: 80.917µs
time: 144.458µs
time: 51.25µs
time: 78.917µs
time: 54.084µs
time: 44.666µs
time: 54.084µs
time: 58.5µs
time: 53.5µs
time: 70.458µs
time: 58.084µs
time: 57.667µs
time: 51.458µs
time: 66.167µs
time: 69µs
time: 108.083µs
time: 82.084µs
time: 97.792µs
time: 128.084µs
time: 226.708µs
time: 129.542µs
time: 166.708µs
time: 181.75µs
time: 174.75µs
time: 145.458µs
time: 606.25µs
time: 97.917µs
time: 45.875µs
time: 82.625µs
time: 109.292µs
time: 94.417µs
time: 164.458µs
time: 174.167µs
time: 183.333µs
time: 54.125µs
time: 82.25µs
time: 174.25µs
time: 168.5µs
time: 192.333µs
time: 1.125917ms
time: 157.625µs
time: 135.625µs
time: 92.041µs
time: 826.834µs
time: 139.042µs
time: 42.709µs
time: 47.291µs
time: 62.583µs
time: 90.958µs
time: 116.958µs
time: 89.667µs
time: 442.958µs
time: 175.208µs
time: 171.834µs
time: 60.291µs
time: 103.791µs
time: 182.333µs
time: 101.709µs
time: 72.709µs
time: 67.541µs
time: 67.25µs
time: 96.541µs
time: 74.834µs
time: 95.583µs
time: 71.75µs
time: 71.083µs
time: 67.667µs
time: 73.25µs
time: 73.959µs
time: 47.459µs
time: 57.458µs
time: 66.125µs
time: 70.542µs
time: 64.334µs
time: 67.833µs
time: 173.583µs
time: 159.625µs
time: 70.583µs
time: 146.333µs
time: 117.209µs
time: 179.959µs
time: 83.875µs
time: 75.042µs
time: 86.959µs
time: 94.125µs
time: 73.916µs


Writing 100 times----
time: 1.696292ms
time: 401.167µs
time: 224.375µs
time: 426.791µs
time: 651.75µs
time: 560µs
time: 326.25µs
time: 944.333µs
time: 276.292µs
time: 466.667µs
time: 973.958µs
time: 413µs
time: 670.167µs
time: 550.125µs
time: 582.208µs
time: 617.708µs
time: 634.958µs
time: 254.375µs
time: 528.458µs
time: 563.083µs
time: 233.666µs
time: 332.833µs
time: 518.292µs
time: 447.25µs
time: 547.459µs
time: 290.75µs
time: 394.75µs
time: 653.708µs
time: 292.291µs
time: 406.542µs
time: 525.458µs
time: 462.167µs
time: 651.541µs
time: 578.666µs
time: 650.709µs
time: 575.917µs
time: 398.334µs
time: 262.041µs
time: 312.208µs
time: 534.209µs
time: 246.5µs
time: 609.125µs
time: 373.292µs
time: 432.958µs
time: 225.25µs
time: 274.167µs
time: 326.792µs
time: 577.083µs
time: 430.542µs
time: 296.5µs
time: 528.791µs
time: 600.5µs
time: 767.375µs
time: 551.667µs
time: 401.25µs
time: 457.75µs
time: 393.042µs
time: 650.625µs
time: 555.708µs
time: 473.833µs
time: 753.833µs
time: 470.792µs
time: 396.708µs
time: 367.583µs
time: 569.75µs
time: 487.625µs
time: 726.541µs
time: 417.333µs
time: 591.209µs
time: 645.959µs
time: 665.167µs
time: 576.708µs
time: 395.875µs
time: 232.875µs
time: 493.042µs
time: 251.041µs
time: 373.292µs
time: 391.125µs
time: 1.505916ms
time: 394.834µs
time: 1.56325ms
time: 600.666µs
time: 678.542µs
time: 414.667µs
time: 586.542µs
time: 402.708µs
time: 287.292µs
time: 400.25µs
time: 411.791µs
time: 531.333µs
time: 263.667µs
time: 269.25µs
time: 197.291µs
time: 258.916µs
time: 340.333µs
time: 237.167µs
time: 315µs
time: 388.166µs
time: 828.458µs
time: 272µs
```

---

<h2 style={{textAlign: "center"}}>Discuss</h2>

<!-- <giscus-widget repo="hyperswine/projects"
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
</giscus-widget> -->
