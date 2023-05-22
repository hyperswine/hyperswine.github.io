"use strict";(self.webpackChunkprojects=self.webpackChunkprojects||[]).push([[555],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6850:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},s="Latency Sensitive Design",o={unversionedId:"research/latency-sensitive-design",id:"research/latency-sensitive-design",title:"Latency Sensitive Design",description:"By Jasen Qin.",source:"@site/docs/research/latency-sensitive-design.md",sourceDirName:"research",slug:"/research/latency-sensitive-design",permalink:"/docs/research/latency-sensitive-design",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"research",previous:{title:"Dynamic Design Theory",permalink:"/docs/research/dynamic-design-theory"},next:{title:"Enlightened Kernel Architecture: Utility, Security, and Performance",permalink:"/docs/research/kernels-and-utility"}},l={},p=[{value:"Precursors",id:"precursors",level:2},{value:"Little\u2019s Law",id:"littles-law",level:2},{value:"Amdahl\u2019s Law",id:"amdahls-law",level:2},{value:"Traffic Models",id:"traffic-models",level:2},{value:"Three Phase Traffic Theory",id:"three-phase-traffic-theory",level:2},{value:"Queuing Theory",id:"queuing-theory",level:2},{value:"Axioms",id:"axioms",level:2},{value:"Profiling Tools",id:"profiling-tools",level:2},{value:"Flame Graphs",id:"flame-graphs",level:3},{value:"Perf",id:"perf",level:3},{value:"What to Profile?",id:"what-to-profile",level:2},{value:"CPU",id:"cpu",level:3},{value:"Heat",id:"heat",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"latency-sensitive-design"},"Latency Sensitive Design"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"By Jasen Qin.")),(0,r.kt)("p",null,"LSD is a science of software design that attempts to formalise the idea of latency in program specifications."),(0,r.kt)("p",null,"LSD deals with information and byte flux at the register level to the function level. What LSD allows us to do is reduce and model a hardware + software environment in a flow centric manner, observing bottlenecks and optimising the software intent in a constrained environment, e.g. subject to battery usage and heat generation."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"precursors"},"Precursors"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Algorithmic complexity")," \u21d2 Applicable to anything reducible to a formal algorithm. Big O Notation, constant, linear, logarithmic, exponential. A high level overview of an algorithm\u2019s mathematical behavior in a vacuum. Unfortunately does not capture the underlying systems that tries to emulate/execute a specification."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Queuing theory")," \u21d2 Erlang related, exactly like what it sounds like. The science of queues and waiting in line."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Traffic theory")," \u21d2 Flow and density of traffic. Flux."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tools")," \u21d2 profiling tools like criterion, flamegraphs, unix ",(0,r.kt)("inlineCode",{parentName:"p"},"time"),", and possibly more I don\u2019t know about."),(0,r.kt)("h2",{id:"littles-law"},"Little\u2019s Law"),(0,r.kt)("p",null,"Given a queue system in a stable state: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"avg.\xa0requests"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mtext",{parentName:"mrow"},"avg.\xa0arrival\xa0rate"),(0,r.kt)("mo",{parentName:"mrow"},"\xd7"),(0,r.kt)("mtext",{parentName:"mrow"},"avg.\xa0time\xa0spent")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{avg. requests} = \\text{avg. arrival rate} \\times \\text{avg. time spent}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"avg.\xa0requests")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"avg.\xa0arrival\xa0rate")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8623em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"avg.\xa0time\xa0spent")))))),"."),(0,r.kt)("h2",{id:"amdahls-law"},"Amdahl\u2019s Law"),(0,r.kt)("p",null,"Amdahl\u2019s Law is concerned with parallelisation and response times."),(0,r.kt)("h2",{id:"traffic-models"},"Traffic Models"),(0,r.kt)("p",null,"A traffic model describes traffic flow in terms of individual actors or a continuous flux of information in a system. The system itself can be seen as a digraph where the edges represent the congestion index."),(0,r.kt)("p",null,"If you want to model car crashes and accidents, then you would want to use a microscopic model. If you want to zoom out and observe the general flow of information from point A and point B through continuous statistical measures like averages and std devs, you\u2019d want to use a macroscopic model."),(0,r.kt)("p",null,"The thing with bytes and registers is that it is very useful to use a macroscopic model rather than considering each byte transfer individually, although that is still quite useful."),(0,r.kt)("h2",{id:"three-phase-traffic-theory"},"Three Phase Traffic Theory"),(0,r.kt)("p",null,"A theory of traffic flow invented by Boris K. Congestion can be divide into 2 states: synchronised flow and wide moving jam. Otherwise we have a free flow state."),(0,r.kt)("h2",{id:"queuing-theory"},"Queuing Theory"),(0,r.kt)("p",null,"Invented by Agner Erlang. Also invented telephone traffic engineering (all of it I think?)."),(0,r.kt)("p",null,"What does it mean to queue or line up? Basically:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Arrival of data"),(0,r.kt)("li",{parentName:"ol"},"Servicing according policy (e.g. FIFO)"),(0,r.kt)("li",{parentName:"ol"},"Output of data")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"axioms"},"Axioms"),(0,r.kt)("p",null,"As a formal science, LSD aims to be rigorous."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Flux"),(0,r.kt)("li",{parentName:"ol"},"Density")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"profiling-tools"},"Profiling Tools"),(0,r.kt)("h3",{id:"flame-graphs"},"Flame Graphs"),(0,r.kt)("p",null,"Flame graphs were invented by Brendan G. and are a great way to visualise fn calls of a program. What you do is insert probes for each function so that each time a fn is called, the time it takes to execute is recorded and summed up, resulting in a mountain chart."),(0,r.kt)("h3",{id:"perf"},"Perf"),(0,r.kt)("p",null,"Perf is a pretty legit and complete linux profiler that records a bunch of different information and is configurable to get what you are looking for. CPU performance, tracepoints, kprobes (kernel probes), uprobes (user probes)."),(0,r.kt)("h2",{id:"what-to-profile"},"What to Profile?"),(0,r.kt)("p",null,"In a modern von neumann computer, we have a CPU, a bunch of memory, accelerator units, ports and peripherals attached to them. What is hard to control is networking, but I think we  can prioritise it. Copying data across disks and devices as well\u2026 illusions are probably key, keep the data in memory and pretend that its copied to the device but know that its actually not copied yet."),(0,r.kt)("h3",{id:"cpu"},"CPU"),(0,r.kt)("p",null,"When profiling the CPU, we are mostly looking for an overall %usage metric and perhaps any anomalies in cpu usage over time. E.g. any large spikes or dips may indicate some program or scheduling problem or worse, a hardware problem."),(0,r.kt)("h3",{id:"heat"},"Heat"),(0,r.kt)("p",null,"We may also be interested in external statistics such as temperature and rate of temperature increase/decrease since they may cause indirect problems with performance, e.g. conductivity-heat relationships with the components. The higher the temperature the more the component would probably have to throttle to not become damaged from prolonged heat stress and inefficiencies due to lower conductivity."),(0,r.kt)("p",null,"Silicon actually has a pretty high melting point of 1410degC. Copper melts at 1000degC. So your components shouldn\u2019t just start melting anytime soon, and 100degC is quite far. But the heat can seem to cause lattice deformations and damages to small scale features."))}m.isMDXComponent=!0}}]);