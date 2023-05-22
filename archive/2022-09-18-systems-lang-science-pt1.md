---
layout: post
title: Systems Programming
---

## The Science of Systems Programming, Pt. 1

I dont see a clear definition of systems programming anywhere. But I do have quite a lot of notes.

Generally, a systems language:

- Creates the logic that is used in other logic. A system does not produce business value in itself. Application logic produces business value
- Is "lower level" and tries to do something useful with the hardware more "directly" than an application language. It may interface with the underlying memory systems more directly rather than, e.g. just use the heap. A systems lang may treat memory like how the processor does. Usually a systems lang compiles to the native system's arch rather than a VM lang or dynamically run (interpreted)
- Is more resource constrained and is sensitive to performance and latency factors. A complex runtime would prob not be available, e.g. a runtime that provides GC and complex dynamic reflection capabilities
- Is sensitive to invalid memory accesses and invalid hardware instruction calls. Should have stronger compile time checks compared to a scripting or application language to avoid potentially disastrous consequences and could kill people (whereas an application level failure could be more easily dealt with). Hence a systems lang should usually be quite strict as safety is highly valued

Historically:

- It referred to basically assembly language which allowed 1:1 correspondence. A purely and most directly imperative language
- In the late 60s, higher level langs came out which could be compiled to assembly. These langs offer features found in most imperative languages today, such as routines or procedures that can be parameterised and return a value as well has have its own local variable/memory context (the stack), algebraic types...

From assembly:

- Assembly is the most direct way to think about systems programming. We can embed assembly in a language as well, or a pseudo asm syntax / other ergonomic interfaces within your own higher level lang
- Perhaps we should look at how to make useful systems using assembly. Then abstract on that to build a high level systems lang

Good Opinions?:

- A syslang could really benefit from more static/compile time features such as a better metaprogramming landscape for generics and macros. This also includes features that would efficiently and intuitively model useful "core systems" and not be too complex or abused (well, cant always be helped, need some level of agency as well for the programmer)
- A high level lang with GC, runtime, etc. like C# can be used as a systems lang if used in a certain way. I think this is more of a workaround though, rather than an enlightened and direct method
- Memory management is a really important factor. You usually cant just say "allocate some memory for X somewhere and we're good", like a script or app. Where do you want to do it, how do you want to do it? How will you keep track of it? And do all of that in a way that gives you the best performance for the cost. Perhaps ownership, RefCounted pointers or just raw pointers. Apparently there are some other unique memory models that may prove to be superior, though its prob gonna be something that has to be embedded and designed around rather than be plugged in and out like a heap allocator

Hot Opinions?:

- Rust is good enough, just need ergonomics

## Definitions

Core Systems => software, prob a library or framework that is vital to the functioning of other software. Not only that, they are prob at the lowest level or the "centre" of the performance and dynamics of the final application software

## Atomics

Lifetimes are required for borrowing. But maybe you dont really need to.

```rust
// valid in rust, not in rei
// trying to cast literal as an l-value
let x = &5

// local anon scope
{
    let y = 10
    // shadow external x defined before it
    let x = &y
}

// illegal! x is out of scope
println(x)

// illegal! y is out of scope
let z = y

z: macro (expr: reic::Expr) {
    // generate code or mess with AST
}

// overload macro
z: macro () => ()

// define z in another type domain
z: {}

// z: {}
```

## Unreal Engine

I found this code:

```hlsl
bool RayCast(
 Texture2D Texture, SamplerState Sampler,
 float3 RayOriginTranslatedWorld, float3 RayDirection,
 float Roughness, float SceneDepth,
 uint NumSteps, float StepOffset,
 float4 HZBUvFactorAndInvFactor, 
 bool bDebugPrint,
 out float3 OutHitUVz,
 out float Level)
{
 #if IS_SSGI_SHADER
  float SlopeCompareToleranceScale = 2.0f;
 #else
  float SlopeCompareToleranceScale = 4.0f;
 #endif

 bool bRayWasClipped;
 FSSRTRay Ray = InitScreenSpaceRayFromWorldSpace(RayOriginTranslatedWorld, RayDirection, SceneDepth, SceneDepth, SlopeCompareToleranceScale, true, bRayWasClipped);

 bool bHit;
 bool bUncertain;
 float3 DebugOutput;
 CastScreenSpaceRay(Texture, Sampler, 1.0, CreateDefaultCastSettings(), Ray, Roughness, NumSteps, StepOffset, HZBUvFactorAndInvFactor, bDebugPrint, DebugOutput, OutHitUVz, Level, bHit, bUncertain);

 return bHit;
}
```

Including more stuff. It works I guess. But I just cant but think what a mess. If screen space global illumination is on, set it to half the usual value. Another thing is how many variables are declared.

The actual driver code is the two functions called and a return value that depends on the second function.

```rust
ray_cast: (args) -> bool  {
    let ray = screen_space_ray(args)
    let b_hit = cast_ray(ray, args)
    return b_hit
}

// which can be simplified further

ray_cast: (args) => cast_ray(screen_space_ray(args))

// in the composition form, which may be easier to modify

ray_cast: (args) => cast_ray . screen_space_ray . args
```

I kind of get why some of the code in industry use would want to be more "verbose" to make it easier to modify more atomically.
I also kind of get why we need to do that, especially with the hardware we have that encourages SIMT styles of programming.
