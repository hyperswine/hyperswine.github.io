---
layout: post
title: Spectrum SoC
---
## Building the SoC

So we would use chisel (scala library) to build and test the SoC. For in depth testing one can convert to verilog and test on a lower level, or convert to C++ afterwards as well. If wanting to simulate on software, will prob have to use verilator for performance and accuracy.

## Generating Verilog

Say you have an app in chisel,

{% highlight scala %}
object Main extends App {
  (new chisel3.stage.ChiselStage).emitVerilog(new CPU, args)
}
{% endhighlight %}

Will generate verilog for your `CPU` class. I think it is systemverilog, though Im not 100% sure. Also idk if Verilog and SystemVerilog is both compatible with Verilator since they seem to suggest they only support one or the other or something.

## Generating C++ and Simulating

So you do `verilator --cc <verilog files> --Mdir <output_dir> --exe` to transpile verilog to executable c++ code. You can also specify `--build cmake` to use cmake to build the code into an executable for your platform.

To increase simulation performance, can use `--threads 6` to transpile with verilator. This generates code that uses multiple threads.

Btw instead of running verilator directly you can use cmake for the whole thing, e.g.

{% highlight cmake %}
project(cmake_example)
find_package(verilator HINTS $ENV{VERILATOR_ROOT})
add_executable(Vour sim_main.cpp)
verilate(Vour SOURCES our.v)
{% endhighlight %}

Verilates the verilog to c++ and compiles it to an executable `Vour`.

## Connnecting to the Model

To hook onto the output model, verilate the verilog which produces `{prefix}.h`. Inside contains a `{prefix}` class. It contains the interface for your model. So Im guessing here you can e.g. connect an SSD to one of its ports using another model. You would do it in `{prefix}.cpp`.

Well ok.
