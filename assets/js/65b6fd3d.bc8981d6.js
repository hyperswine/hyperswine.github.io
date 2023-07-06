"use strict";(self.webpackChunkprojects=self.webpackChunkprojects||[]).push([[695],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(a),u=i,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:1},r="Dynamic Design Theory",s={unversionedId:"research/dynamic-design-theory",id:"research/dynamic-design-theory",title:"Dynamic Design Theory",description:"By Jasen Qin.",source:"@site/docs/research/dynamic-design-theory.md",sourceDirName:"research",slug:"/research/dynamic-design-theory",permalink:"/docs/research/dynamic-design-theory",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"research",previous:{title:"Short Formalism of Concurrency",permalink:"/docs/research/concurrency"},next:{title:"Performance Considerations, Pt. 1",permalink:"/docs/research/performance-post"}},l={},m=[{value:"Pt 1. Precursor Fields and Related",id:"pt-1-precursor-fields-and-related",level:2},{value:"Latency Sensitive Design (LSD)",id:"latency-sensitive-design-lsd",level:2},{value:"Precursors",id:"precursors",level:2},{value:"Little\u2019s Law",id:"littles-law",level:2},{value:"Amdahl\u2019s Law",id:"amdahls-law",level:2},{value:"Traffic Models",id:"traffic-models",level:2},{value:"Three Phase Traffic Theory",id:"three-phase-traffic-theory",level:2},{value:"Queuing Theory",id:"queuing-theory",level:2},{value:"ISAs",id:"isas",level:2},{value:"ISA: Spectre Proto",id:"isa-spectre-proto",level:2},{value:"Vectorisation",id:"vectorisation",level:2},{value:"Halting Problem",id:"halting-problem",level:2},{value:"Axioms",id:"axioms",level:2},{value:"Profiling Tools",id:"profiling-tools",level:2},{value:"Flame Graphs",id:"flame-graphs",level:3},{value:"Perf",id:"perf",level:3},{value:"What to Profile?",id:"what-to-profile",level:2},{value:"CPU",id:"cpu",level:3},{value:"Heat",id:"heat",level:3},{value:"Modular Design",id:"modular-design",level:2},{value:"Functional Design",id:"functional-design",level:3},{value:"Parametric Components",id:"parametric-components",level:3},{value:"User Centric Design",id:"user-centric-design",level:2},{value:"Pseudo-Dynamism &amp; Continuity/Dynamism Simulation",id:"pseudo-dynamism--continuitydynamism-simulation",level:2},{value:"Pt 2. Language Design",id:"pt-2-language-design",level:2},{value:"Polymorphism",id:"polymorphism",level:2},{value:"Ad Hoc Polymorphism",id:"ad-hoc-polymorphism",level:3},{value:"Parametric Polymorphism &amp; Monomorphism",id:"parametric-polymorphism--monomorphism",level:3},{value:"Not a Science",id:"not-a-science",level:2},{value:"Kernel Architecture: Utility, Security, and Performance",id:"kernel-architecture-utility-security-and-performance",level:2},{value:"Utility &amp; Security",id:"utility--security",level:3},{value:"Non Utility",id:"non-utility",level:3}],c={toc:m};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dynamic-design-theory"},"Dynamic Design Theory"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"By Jasen Qin.")),(0,i.kt)("p",null,"How does one design a dynamic system according to its intrinsics? Is there a generic higher order way to reason about it? We want optimise for low latency, high throughput, while maintaining a sense of control and elegance over the model."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"pt-1-precursor-fields-and-related"},"Pt 1. Precursor Fields and Related"),(0,i.kt)("h2",{id:"latency-sensitive-design-lsd"},"Latency Sensitive Design (LSD)"),(0,i.kt)("p",null,"LSD is a science of software design that attempts to formalise the idea of latency in program specifications."),(0,i.kt)("p",null,"LSD deals with information and byte flux at the register level to the function level. What LSD allows us to do is reduce and model a hardware + software environment in a flow centric manner, observing bottlenecks and optimising the software intent in a constrained environment, e.g. subject to battery usage and heat generation."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"precursors"},"Precursors"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Algorithmic complexity")," \u21d2 Applicable to anything reducible to a formal algorithm. Big O Notation, constant, linear, logarithmic, exponential. A high level overview of an algorithm\u2019s mathematical behavior in a vacuum. Unfortunately does not capture the underlying systems that tries to emulate/execute a specification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Queuing theory")," \u21d2 Erlang related, exactly like what it sounds like. The science of queues and waiting in line."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Traffic theory")," \u21d2 Flow and density of traffic. Flux."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tools")," \u21d2 profiling tools like criterion, flamegraphs, unix ",(0,i.kt)("inlineCode",{parentName:"p"},"time"),", and possibly more I don\u2019t know about."),(0,i.kt)("h2",{id:"littles-law"},"Little\u2019s Law"),(0,i.kt)("p",null,"Given a queue system in a stable state: ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mtext",{parentName:"mrow"},"avg.\xa0requests"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mtext",{parentName:"mrow"},"avg.\xa0arrival\xa0rate"),(0,i.kt)("mo",{parentName:"mrow"},"\xd7"),(0,i.kt)("mtext",{parentName:"mrow"},"avg.\xa0time\xa0spent")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{avg. requests} = \\text{avg. arrival rate} \\times \\text{avg. time spent}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"avg.\xa0requests")),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"avg.\xa0arrival\xa0rate")),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8623em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"avg.\xa0time\xa0spent")))))),"."),(0,i.kt)("h2",{id:"amdahls-law"},"Amdahl\u2019s Law"),(0,i.kt)("p",null,"Amdahl\u2019s Law is concerned with parallelisation and response times."),(0,i.kt)("h2",{id:"traffic-models"},"Traffic Models"),(0,i.kt)("p",null,"A traffic model describes traffic flow in terms of individual actors or a continuous flux of information in a system. The system itself can be seen as a digraph where the edges represent the congestion index."),(0,i.kt)("p",null,"If you want to model car crashes and accidents, then you would want to use a microscopic model. If you want to zoom out and observe the general flow of information from point A and point B through continuous statistical measures like averages and std devs, you\u2019d want to use a macroscopic model."),(0,i.kt)("p",null,"The thing with bytes and registers is that it is very useful to use a macroscopic model rather than considering each byte transfer individually, although that is still quite useful."),(0,i.kt)("h2",{id:"three-phase-traffic-theory"},"Three Phase Traffic Theory"),(0,i.kt)("p",null,"A theory of traffic flow invented by Boris K. Congestion can be divide into 2 states: synchronised flow and wide moving jam. Otherwise we have a free flow state."),(0,i.kt)("h2",{id:"queuing-theory"},"Queuing Theory"),(0,i.kt)("p",null,"Invented by Agner Erlang. Also invented telephone traffic engineering (all of it I think?)."),(0,i.kt)("p",null,"What does it mean to queue or line up? Basically:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Arrival of data"),(0,i.kt)("li",{parentName:"ol"},"Servicing according policy (e.g. FIFO)"),(0,i.kt)("li",{parentName:"ol"},"Output of data")),(0,i.kt)("h2",{id:"isas"},"ISAs"),(0,i.kt)("p",null,'Instructions are imperative by default on atomic execution environments. This is probably because digital electronics are ubiquitous and hence most modern atomic instructions are built from discrete signals. If it was built from continuous signals, perhaps we could have something quite different, and not imperative. I think its still possible to have "declarative" instructions.'),(0,i.kt)("h2",{id:"isa-spectre-proto"},"ISA: Spectre Proto"),(0,i.kt)("p",null,"The spectre ISA is designed for minimalist, functional computing. How do we verify that an ISA is well designed? Well it should be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Well represented. That means probably turing complete or total turing complete"),(0,i.kt)("li",{parentName:"ul"},"Encourage directness and low overhead. A language that compiles to it would essentially look the same or similar to what one would expect"),(0,i.kt)("li",{parentName:"ul"},"Encourage expressiveness. No point in a language that that a billion instructions just to do something small. Should be proportional in a logical human centric manner")),(0,i.kt)("h2",{id:"vectorisation"},"Vectorisation"),(0,i.kt)("p",null,"Array programming is possibly one of the most effective methods of programming. Most non trivial programs can be represented as a sequence of steps that operate on an initially set up set of data."),(0,i.kt)("p",null,"Treating arrays as first class citizens seems to allow the conciseness that is APL. Lisp and haskell also benefit. If 70% of all code is in for loops, we should be able to convert them to ",(0,i.kt)("inlineCode",{parentName:"p"},"for_each")," iterators and unordered ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),"s. With const eval and eager execution we could make a bunch of simplifications at compile time which would allow the resulting code to be more readily vectorised into ",(0,i.kt)("inlineCode",{parentName:"p"},"vadd"),' type instructions. Inlining too. As long as theres no "fixed" operations like ',(0,i.kt)("inlineCode",{parentName:"p"},"sleep()")," that places a certain restraint during execution to not allow simple vector ops."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"halting-problem"},"Halting Problem"),(0,i.kt)("p",null,"The halting problem is quite simple yet complex. It can be applied to many situations. Many types of programs can be reduced to a formulation of the halting problem, and it is useful in ensuruing a program doesn't just hang there doing nothing."),(0,i.kt)("p",null,'Of interest are total functional programming languages. These langs are "provably terminating", i.e. you can guarentee statically that they will eventually halt.'),(0,i.kt)("p",null,"What if, an ISA itself could implement a total functional language that bypasses the halting problem? Or perhaps a compiler?"),(0,i.kt)("h2",{id:"axioms"},"Axioms"),(0,i.kt)("p",null,"As a formal science, LSD aims to be rigorous."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Flux"),(0,i.kt)("li",{parentName:"ol"},"Density")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"profiling-tools"},"Profiling Tools"),(0,i.kt)("h3",{id:"flame-graphs"},"Flame Graphs"),(0,i.kt)("p",null,"Flame graphs were invented by Brendan G. and are a great way to visualise fn calls of a program. What you do is insert probes for each function so that each time a fn is called, the time it takes to execute is recorded and summed up, resulting in a mountain chart."),(0,i.kt)("h3",{id:"perf"},"Perf"),(0,i.kt)("p",null,"Perf is a pretty legit and complete linux profiler that records a bunch of different information and is configurable to get what you are looking for. CPU performance, tracepoints, kprobes (kernel probes), uprobes (user probes)."),(0,i.kt)("h2",{id:"what-to-profile"},"What to Profile?"),(0,i.kt)("p",null,"In a modern von neumann computer, we have a CPU, a bunch of memory, accelerator units, ports and peripherals attached to them. What is hard to control is networking, but I think we  can prioritise it. Copying data across disks and devices as well\u2026 illusions are probably key, keep the data in memory and pretend that its copied to the device but know that its actually not copied yet."),(0,i.kt)("h3",{id:"cpu"},"CPU"),(0,i.kt)("p",null,"When profiling the CPU, we are mostly looking for an overall %usage metric and perhaps any anomalies in cpu usage over time. E.g. any large spikes or dips may indicate some program or scheduling problem or worse, a hardware problem."),(0,i.kt)("h3",{id:"heat"},"Heat"),(0,i.kt)("p",null,"We may also be interested in external statistics such as temperature and rate of temperature increase/decrease since they may cause indirect problems with performance, e.g. conductivity-heat relationships with the components. The higher the temperature the more the component would probably have to throttle to not become damaged from prolonged heat stress and inefficiencies due to lower conductivity."),(0,i.kt)("p",null,"Silicon actually has a pretty high melting point of 1410degC. Copper melts at 1000degC. So your components shouldn\u2019t just start melting anytime soon, and 100degC is quite far. But the heat can seem to cause lattice deformations and damages to small scale features."),(0,i.kt)("h2",{id:"modular-design"},"Modular Design"),(0,i.kt)("p",null,"A design principle that subdivides a larger specification into a set of constituent \u201cmodules\u201d, that when combined, perhaps in some order, results in the holistic functioning of the intended system."),(0,i.kt)("h3",{id:"functional-design"},"Functional Design"),(0,i.kt)("p",null,"A function-centric way to look at modular design and kind of a more generic idea of \u201cfunctional programming\u201d. Each constituent \u201cpart\u201d or module of a device should only have one function with minimum side effects on other parts."),(0,i.kt)("h3",{id:"parametric-components"},"Parametric Components"),(0,i.kt)("p",null,"To facilitate communication between each component, a component may require or request functionality from another component via a system of arguments."),(0,i.kt)("h2",{id:"user-centric-design"},"User Centric Design"),(0,i.kt)("p",null,"The goal of the product is for the user to use and approve of. Not to abuse or be a danger to them and the environment. So the best way to check off the criteria is to ensure it actually works in reality. If a user finds something dynamic, then goal achieved. The problem is if they find it dynamic for some other reason. We want to be able to directly correlate market success with design and implementation."),(0,i.kt)("h2",{id:"pseudo-dynamism--continuitydynamism-simulation"},"Pseudo-Dynamism & Continuity/Dynamism Simulation"),(0,i.kt)("p",null,"Sometimes its quite hard to make a system feel dynamic. In that case, it is possible to consider ways to \u201csimulate\u201d dynamism so that despite the underlying system being mostly static, the resulting product still feels refreshing."),(0,i.kt)("p",null,"One area where this can be applied is video capture through discrete frames. Even though all we\u2019re doing is looping through each frame, if we do it fast enough and capture each frame close enough to the next, it results in something that looks continuous and \u201cdynamic\u201d. This can also be applied to animations and computer screens which output GUIs and games. The underlying systems are complex and seemingly static like gpus, cpus, busses, video cables, monitors, etc."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"pt-2-language-design"},"Pt 2. Language Design"),(0,i.kt)("p",null,"How do we apply dynamic design to programming languages to make them more elegant and dynamic to the programmer?"),(0,i.kt)("h2",{id:"polymorphism"},"Polymorphism"),(0,i.kt)("p",null,"Instead of writing each piece functionality separately for each type, maybe there is a way to unify similar functionality over different types? Perhaps we could write an interface which types can implement and automatically inherit."),(0,i.kt)("h3",{id:"ad-hoc-polymorphism"},"Ad Hoc Polymorphism"),(0,i.kt)("p",null,"Usually involves method shadowing and virtual function lookup. Bad idea cause generally extra steps involved and not as optimisable statically. May save some memory? Nah cause your implemented functions are different instances anyway. AD hoc polymorphism does not have to be a fundamental part of your type system. You just need a way to to make functions do separate things when applied to different types. Fn overloading and Op overloading can be implemented via ad hoc polymorphism."),(0,i.kt)("p",null,"Naively, languages implement dynamism ad hoc with runtime-dynamic code (RDC). This is simple and intuitive for the programmer and may result in less code generated, promoting cache friendliness. However, ad hoc runtime dynamism usually has a higher overhead since it has to do more checks, e.g. dynamically check a variable. This can be mitigated through effective caching of already computed values, lazy evaluation, common path speculative execution, branch prediction."),(0,i.kt)("p",null,"By doing so, we get \u201cdynamic programming\u201d which involves techniques to cache computed results that are expected again in the future, preferably many times more, otherwise the caching cost might not be worth it. There are many ways to exploit ad hoc runtime dynamism and optimise it work well on a specific platform."),(0,i.kt)("h3",{id:"parametric-polymorphism--monomorphism"},"Parametric Polymorphism & Monomorphism"),(0,i.kt)("p",null,"Parametric programming is when the behaviour of a function is similar regardless of the types its operating on. Perhaps you require the types to be restrained in a particular way; the type itself is irrelevant, only its derived or implemented behaviours which match a specific class of behaviours."),(0,i.kt)("h2",{id:"not-a-science"},"Not a Science"),(0,i.kt)("p",null,"So even though concepts like static and dynamic dispatch exist, they are not a science. People will say \u201cgenerally do X\u201d or \u201cgenerally do Y in this other case\u201d. They won\u2019t say \u201cdo X in a Z manner to gain a 20% decrease in overall latency in system S\u201d, because 1. its quite complex, 2. we want general advice and there are many different platforms, 3. it hasn\u2019t been studied formally."),(0,i.kt)("h2",{id:"kernel-architecture-utility-security-and-performance"},"Kernel Architecture: Utility, Security, and Performance"),(0,i.kt)("p",null,"Kernels are a key part of a useful computing system. There have been many kernels implemented as a part of a greater system, e.g. an operating system. Such kernels include linux, bsd, nt, sun, dos kernel, etc. These kernels have been developed into their modern counterparts and widely used in GNU/Linux, Android (Google/Linux), Windows, MacOS, FreeBSD, and other smaller embedded systems. Some systems like the Pi may also have a small RTOS based on something like RODOS or ThreadX."),(0,i.kt)("p",null,"Newer kernels of interest include a myriad of RTOS's, fushcia (google), sel4, kataos (google), custom console kernels."),(0,i.kt)("h3",{id:"utility--security"},"Utility & Security"),(0,i.kt)("p",null,"Kernels are built to be useful. Otherwise, you could just run apps directly on a system. It would prob be more problematic since you would have to use the direct abstractions. Or develop a library to communicate with the hardware directly. But how would you then ensure everything works properly and noone takes up too much time and compute? Well you could have a mediator program. But that mediator program could basically be then seen as a kernel. I believe modern kernels are more like mediators rather than abstractors."),(0,i.kt)("p",null,"In neutron, the kernel itself doesnt provide any abstractions. It's main job is to setup everything safely (its code is verified) and let others provide 99% of the functionality."),(0,i.kt)("h3",{id:"non-utility"},"Non Utility"),(0,i.kt)("p",null,"Some specific things I dont really like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"println")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"print")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"system.out.println"),". They assume things like ",(0,i.kt)("inlineCode",{parentName:"li"},"stdin"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"stdout"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"stderr")," which Im not fond of")))}p.isMDXComponent=!0}}]);