"use strict";(self.webpackChunkprojects=self.webpackChunkprojects||[]).push([[5443],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={layout:"post",title:"Higher Peformance Prolog"},r=void 0,l={permalink:"/blog/2024/01/14/high-perf-prolog-impl",source:"@site/blog/2024-01-14-high-perf-prolog-impl.md",title:"Higher Peformance Prolog",description:"Lets think about how we can make a high performance implementation of Prolog.",date:"2024-01-14T00:00:00.000Z",formattedDate:"January 14, 2024",tags:[],readingTime:8.41,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Higher Peformance Prolog"},prevItem:{title:"Observations",permalink:"/blog/2024/04/23/observations-on-open-source-1"},nextItem:{title:"Metacomputer",permalink:"/blog/2023/09/15/meta-computer"}},s={authorsImageUrls:[]},c=[{value:"Syntax",id:"syntax",level:2},{value:"How do existing Prolog implementations do their thing?",id:"how-do-existing-prolog-implementations-do-their-thing",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Lets think about how we can make a high performance implementation of Prolog."),(0,o.kt)("p",null,"I think certain annotations like mode declarations and input output declarations can help.\nThose will be optional. What I dont want is types I think, that would definitely make it less prolog-like."),(0,o.kt)("p",null,"If not using the cut operator, maybe prolog predicates could be mapped to SAT problems relatively simply.\nIf so, external high performance SAT solvers could be used."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Parallelism using lightweight greenthreads and maybe a userspace threading library could help.\nLike it could basically identity independent parts of the program and aggressively try to parallelise them.\nToo fine grained, probably not good. Especially considering the processors we use right now.")),(0,o.kt)("p",null,'Per-Goal Basis: Parallelizing on a per-goal basis could be a promising approach. Each goal in Prolog can be considered a reasonably self-contained unit of computation, making it a good candidate for parallel execution. Maybe do dependency analysis on each goal beforehand to see if you can parallelize it "embarrassingly" or might require extra synchronization.'),(0,o.kt)("p",null,"Lists and collections could potentially be parallelized at a very fine level of granularity in terms of vectorized instructions.\nOne could annotate that a list of N elements of integers could be represented as say a list of N 32-bit integers, and be represented in a tightly packed array that could be easily amenable for vector operations like vector addition."),(0,o.kt)("p",null,"Could complicate backtracking quite a bit. Might require synchronization."),(0,o.kt)("p",null,"Biggest issue is I think the fact that modern processors are kind of setup for coarse grained parallelism, on a per-process basis."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"More efficient backtracking. Not sure what it might look like. Maybe some hueristics and things to make searching potentially more optimal.")),(0,o.kt)("p",null,"Backjumping and Learning: Instead of traditional backtracking, use techniques like backjumping, where the system jumps back more than one level in the search tree when a dead end is reached. Learning from failed paths to avoid similar paths in the future can also be efficient."),(0,o.kt)("p",null,"Heuristic methods can be very effective but require domain-specific knowledge."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Maybe type inference where possible. By assigning concrete types, just in time to queries, it could make the code more lightweight if we can map the values to primitive data types like 32-bit integers rather than abstract objects.")),(0,o.kt)("p",null,"How to do this? It feels like some cases could be easier and straightforward while other cases harder. The general plan is to be able to map complex prolog data and values to low level primitives."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pl"},"%% what is T? in normal prolog, it would just be a generic type\n%% but we can infer from the use of T in t(T)\nx(T) :- t(T).\n\n%% t is defined here as 1 and \"x\"\n%% that means statically we can say that t(T) where T = union(num, string)\n%% since we are only given a value = 1 for num, we can further optimize and say num = int8\n%% x is also a single string, and we could turn that into an vector of 1-byte each to represent ASCII because we dont need UTF-8 encoding\n%% we could also choose to further optimize string down to a single char rather than a vector or array, since we are only given a string with 1 element\nt(1).\nt('x').\n")),(0,o.kt)("p",null,"In this example, we can apply type inference based on the original data available. However, if the database changes, like we ",(0,o.kt)("inlineCode",{parentName:"p"},"assert")," something into the database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t(y(z)).\n")),(0,o.kt)("p",null,"This could then change the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"t(T)"),". Does that mean we should then recompile our initial program to change the type signature and the way that ",(0,o.kt)("inlineCode",{parentName:"p"},"t(T)")," and all the predicates that depend on it work?"),(0,o.kt)("p",null,"Version it, and recompile. Maybe not even version if we dont want, but can easily also redo it or use the existing predicate and only recompile on demand if the new version actually should get used."),(0,o.kt)("p",null,"Maybe we can mark it as dirty. Then use the dynamically typed version while it is recompiling. The shell could show something like ",(0,o.kt)("inlineCode",{parentName:"p"},"(detected new type... recompiling)"),"."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Ad hoc optimizations.")),(0,o.kt)("p",null,"Maybe we could optimize on the fly based on the types of queries we receive."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Memory Management")),(0,o.kt)("p",null,"Maybe using linear types or uniqueness types a la rust could be useful for memory management. Since we are basically threading data into goals, we could dont have to make copies of the data each time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linear types"),", ",(0,o.kt)("strong",{parentName:"p"},"CPS")," and ",(0,o.kt)("strong",{parentName:"p"},"primitive data type inference")," could all be useful for reducing memory load and increasing cache efficiency."),(0,o.kt)("p",null,"Maybe more aggressive tabling, and tabling by default."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Semantics Changes")),(0,o.kt)("p",null,"Maybe instead of treating predicates like function calls with stack frames. We instead use a continuation passing style where we are always threading the caller context through to the next caller, so that it can return if need be. We basically pass the current continuation to the next."),(0,o.kt)("p",null,"But will probably still use stack frames for keeping track of local memory, unless we dont create more data."),(0,o.kt)("p",null,"Hybrid Approach: CPS could be used selectively for performance-critical parts of the code, while keeping traditional stack-based execution for other parts."),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Concurrency Features at Hardware Level")),(0,o.kt)("p",null,"Generally cores right next to each other in the processor TOPOLOGY can much more quickly communicate with each other, by factors of 10x. Its already not too bad, like 20ns to 100ns. But it might be hard to directly schedule threads that are topology aware, generally the OS's job since it exposes a thread API."),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Spatial and Temporal Optimizations")),(0,o.kt)("p",null,"Tightly packing collections into say an array like structure or struct of arrays could be quite cogent.\nMaybe try to use hueristics to invoke a goal that would be physically and temporally close to goals that already exist."),(0,o.kt)("p",null,"Specialized data structures."),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"More Extreme Considerations")),(0,o.kt)("p",null,"Maybe GPUs and tensor processsing hardware could be used instead. It might add more latency, but could be highly effective for workloads where it is more about searching and simple computations than sequential execution."),(0,o.kt)("p",null,"Parallel Search and Pattern Matching: Prolog's search and pattern matching operations, which are often highly parallelizable, could greatly benefit from GPU acceleration. GPUs, with their thousands of small cores, are adept at handling such massively parallel computations."),(0,o.kt)("p",null,"Data-Intensive Operations on large sets of data, especially those that involve simple, repeatable computations (like processing lists or arrays), can be significantly sped up on GPUs."),(0,o.kt)("p",null,"Standard vs. Accelerated Predicates: Offer both standard predicates like ",(0,o.kt)("inlineCode",{parentName:"p"},"maplist")," for CPU execution and specialized versions like ",(0,o.kt)("inlineCode",{parentName:"p"},"maplist_accel")," for GPU-accelerated execution. This allows the programmer to explicitly choose the acceleration for computationally intensive tasks."),(0,o.kt)("p",null,"Use Julia for interop and calling external things, not C, or C but ensure that it is very portable.\nOr compile the julia program to C and link that. Probably going to have to use julia to interact with LLVM."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"I also think it could be an opportunity to potentially improve the syntax in an optional manner. Like you can also make it use a whitespace sensitive approach where you dont have to use ",(0,o.kt)("inlineCode",{parentName:"p"},",")," to compose statements in CONJUNCTION. And instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate(Args...)"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate Args...")," in certain contexts like elixir."),(0,o.kt)("p",null,"With whitespace sensitivity, the ",(0,o.kt)("inlineCode",{parentName:"p"},".")," period could also be omitted in some contexts."),(0,o.kt)("p",null,"I think having higher order predicates like ",(0,o.kt)("inlineCode",{parentName:"p"},"P1(P2(Args...))")," where P1 and P2 are parameters is also a must. Maybe builtin lambda functions too, but Im not sure, that might make it not work very well with existing implementations. Maybe just the ",(0,o.kt)("inlineCode",{parentName:"p"},"yall")," library in SWI-Prolog is good enough, prolog is not a functional programming language."),(0,o.kt)("p",null,"So this would be valid"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-prolog"},"ancestor X Y :- father X Z, father Z Y\n%% or\nancestor X Y :-\n  father X Z\n  father Z Y\n")),(0,o.kt)("h2",{id:"how-do-existing-prolog-implementations-do-their-thing"},"How do existing Prolog implementations do their thing?"),(0,o.kt)("p",null,"Many implementations use the WAM as a basis. The original implementation based on (I think cambridge or some other english university) was designed by David Warren and kind of worked quite well. It was quite powerful in terms of what it could do, its features. I think it wasnt the greatest in performance, but was good enough for many things like AI and databases and searching/planning."),(0,o.kt)("p",null,"SWI-Prolog, made by Jan Wielemaker is probably the most widely used and developed version. It supports ISO Prolog to large extent, though not sure if its fully compliant. I've read some of its source code and it looks decent for a program that was started a while back. It beats other open source implementations in performance by quite a bit, modern and old alike: scryer-prolog, eclipse prolog, etc. I heard good things about scryer-prolog too, but last I checked its benchmarks were okay-ish but not as competitive as SWI."),(0,o.kt)("p",null,"Then theres SICSTus, probably the gold standard in high performance prolog. It seems to use a combination of JIT compilation and hueristics to achieve pretty high performance. By almost an order of magnitude or two compared to SWI sometimes. It probably also does type inference and some complex memory representation and management. Maybe some complex and efficient backtracking too. It does compile to native code, probably something it made itself as it is quite a bit old now (I dont think it uses LLVM, though maybe newer versions might). JIT does incur some initial latency and therefore time penalties but can more than make up for it when it gets going. Things like cranelift for WASM could also speed up JIT compilation, and a WASM runtime to allow near native performance in many cases (or so Ive heard, probably should look more into it)."),(0,o.kt)("p",null,"I noticed in many prolog implementations, there is also a lot of checking. A lot of checking between executions. It might have been fine back then to make sure it actually works, but the checking Im talking about are things like just seeing whether or not an operation succeeded. I think if we want high performance, we really do need to minimize dynamic checks where possible. Maybe type inference could help with that, and dynamic types otherwise rather than a cursed mix of static-ish operations on a virtual machine."))}d.isMDXComponent=!0}}]);