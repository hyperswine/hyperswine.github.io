"use strict";(self.webpackChunkprojects=self.webpackChunkprojects||[]).push([[581],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:3},o="Enlightened Kernel Architecture: Utility, Security, and Performance",l={unversionedId:"research/kernels-and-utility",id:"research/kernels-and-utility",title:"Enlightened Kernel Architecture: Utility, Security, and Performance",description:"Kernels are a key part of a useful computing system. There have been many kernels implemented as a part of a greater system, e.g. an operating system. Such kernels include linux, bsd, nt, sun, dos kernel, etc. These kernels have been developed into their modern counterparts and widely used in GNU/Linux, Android (Google/Linux), Windows, MacOS, FreeBSD, and other smaller embedded systems. Some systems like the Pi may also have a small RTOS based on something like RODOS or ThreadX.",source:"@site/docs/research/kernels-and-utility.md",sourceDirName:"research",slug:"/research/kernels-and-utility",permalink:"/docs/research/kernels-and-utility",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"research",previous:{title:"Latency Sensitive Design",permalink:"/docs/research/latency-sensitive-design"},next:{title:"Instruction Set Architecture from First Principles: Part 1",permalink:"/docs/research/isa-pt1"}},s={},c=[{value:"Utility &amp; Security",id:"utility--security",level:2},{value:"Non Utility",id:"non-utility",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enlightened-kernel-architecture-utility-security-and-performance"},"Enlightened Kernel Architecture: Utility, Security, and Performance"),(0,i.kt)("p",null,"Kernels are a key part of a useful computing system. There have been many kernels implemented as a part of a greater system, e.g. an operating system. Such kernels include linux, bsd, nt, sun, dos kernel, etc. These kernels have been developed into their modern counterparts and widely used in GNU/Linux, Android (Google/Linux), Windows, MacOS, FreeBSD, and other smaller embedded systems. Some systems like the Pi may also have a small RTOS based on something like RODOS or ThreadX."),(0,i.kt)("p",null,"Newer kernels of interest include a myriad of RTOS's, fushcia (google), sel4, kataos (google), custom console kernels."),(0,i.kt)("h2",{id:"utility--security"},"Utility & Security"),(0,i.kt)("p",null,"Kernels are built to be useful. Otherwise, you could just run apps directly on a system. It would prob be more problematic since you would have to use the direct abstractions. Or develop a library to communicate with the hardware directly. But how would you then ensure everything works properly and noone takes up too much time and compute? Well you could have a mediator program. But that mediator program could basically be then seen as a kernel. I believe modern kernels are more like mediators rather than abstractors."),(0,i.kt)("p",null,"In neutron, the kernel itself doesnt provide any abstractions. It's main job is to setup everything safely (its code is verified) and let others provide 99% of the functionality."),(0,i.kt)("h2",{id:"non-utility"},"Non Utility"),(0,i.kt)("p",null,"Some specific things I dont really like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"println")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"print")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"system.out.println"),". They assume things like ",(0,i.kt)("inlineCode",{parentName:"li"},"stdin"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"stdout"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"stderr")," which Im not fond of")))}d.isMDXComponent=!0}}]);