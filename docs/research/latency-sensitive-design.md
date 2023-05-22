---
sidebar_position: 2
---

# Latency Sensitive Design

**By Jasen Qin.**

LSD is a science of software design that attempts to formalise the idea of latency in program specifications.

LSD deals with information and byte flux at the register level to the function level. What LSD allows us to do is reduce and model a hardware + software environment in a flow centric manner, observing bottlenecks and optimising the software intent in a constrained environment, e.g. subject to battery usage and heat generation.

---

## Precursors

**Algorithmic complexity** ⇒ Applicable to anything reducible to a formal algorithm. Big O Notation, constant, linear, logarithmic, exponential. A high level overview of an algorithm’s mathematical behavior in a vacuum. Unfortunately does not capture the underlying systems that tries to emulate/execute a specification.

**Queuing theory** ⇒ Erlang related, exactly like what it sounds like. The science of queues and waiting in line.

**Traffic theory** ⇒ Flow and density of traffic. Flux.

**Tools** ⇒ profiling tools like criterion, flamegraphs, unix `time`, and possibly more I don’t know about.

## Little’s Law

Given a queue system in a stable state: $\text{avg. requests} = \text{avg. arrival rate} \times \text{avg. time spent}$.

## Amdahl’s Law

Amdahl’s Law is concerned with parallelisation and response times.

## Traffic Models

A traffic model describes traffic flow in terms of individual actors or a continuous flux of information in a system. The system itself can be seen as a digraph where the edges represent the congestion index.

If you want to model car crashes and accidents, then you would want to use a microscopic model. If you want to zoom out and observe the general flow of information from point A and point B through continuous statistical measures like averages and std devs, you’d want to use a macroscopic model.

The thing with bytes and registers is that it is very useful to use a macroscopic model rather than considering each byte transfer individually, although that is still quite useful.

## Three Phase Traffic Theory

A theory of traffic flow invented by Boris K. Congestion can be divide into 2 states: synchronised flow and wide moving jam. Otherwise we have a free flow state.

## Queuing Theory

Invented by Agner Erlang. Also invented telephone traffic engineering (all of it I think?).

What does it mean to queue or line up? Basically:

1. Arrival of data
2. Servicing according policy (e.g. FIFO)
3. Output of data

---

## Axioms

As a formal science, LSD aims to be rigorous.

1. Flux
2. Density

---

## Profiling Tools

### Flame Graphs

Flame graphs were invented by Brendan G. and are a great way to visualise fn calls of a program. What you do is insert probes for each function so that each time a fn is called, the time it takes to execute is recorded and summed up, resulting in a mountain chart.

### Perf

Perf is a pretty legit and complete linux profiler that records a bunch of different information and is configurable to get what you are looking for. CPU performance, tracepoints, kprobes (kernel probes), uprobes (user probes).

## What to Profile?

In a modern von neumann computer, we have a CPU, a bunch of memory, accelerator units, ports and peripherals attached to them. What is hard to control is networking, but I think we  can prioritise it. Copying data across disks and devices as well… illusions are probably key, keep the data in memory and pretend that its copied to the device but know that its actually not copied yet.

### CPU

When profiling the CPU, we are mostly looking for an overall %usage metric and perhaps any anomalies in cpu usage over time. E.g. any large spikes or dips may indicate some program or scheduling problem or worse, a hardware problem.

### Heat

We may also be interested in external statistics such as temperature and rate of temperature increase/decrease since they may cause indirect problems with performance, e.g. conductivity-heat relationships with the components. The higher the temperature the more the component would probably have to throttle to not become damaged from prolonged heat stress and inefficiencies due to lower conductivity.

Silicon actually has a pretty high melting point of 1410degC. Copper melts at 1000degC. So your components shouldn’t just start melting anytime soon, and 100degC is quite far. But the heat can seem to cause lattice deformations and damages to small scale features.
