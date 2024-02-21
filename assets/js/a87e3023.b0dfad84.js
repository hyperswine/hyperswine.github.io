"use strict";(self.webpackChunkprojects=self.webpackChunkprojects||[]).push([[4628],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>u});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,_=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?t.createElement(_,p(p({ref:r},c),{},{components:n})):t.createElement(_,p({ref:r},c))}));function u(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5722:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(7462),a=(n(7294),n(3905));const i={date:new Date("2022-12-17T00:00:00.000Z"),name:"Jasen Qin",title:"Rei Language",url:"https://github.com/hyperswine",email:"jasen.qin33@gmail.com"},p=void 0,o={unversionedId:"research/rei-1",id:"research/rei-1",title:"Rei Language",description:"Rei is not meant to be a traditional language",source:"@site/docs/research/rei-1.md",sourceDirName:"research",slug:"/research/rei-1",permalink:"/docs/research/rei-1",draft:!1,tags:[],version:"current",frontMatter:{date:"2022-12-17T00:00:00.000Z",name:"Jasen Qin",title:"Rei Language",url:"https://github.com/hyperswine",email:"jasen.qin33@gmail.com"},sidebar:"research",previous:{title:"Performance, Pt. 1",permalink:"/docs/research/performance-considerations-1"},next:{title:"Scala Book",permalink:"/docs/research/scala-book"}},s={},l=[{value:"Rei VM",id:"rei-vm",level:2},{value:"Base Language Specification",id:"base-language-specification",level:2}],c={toc:l};function m(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rei is not meant to be a traditional language"),"\nA big thing about rei is that it is not meant to be a language that works in a traditional way. What this means is that many of its concepts, although might feel familiar, can also be quite a lot different. The first and foremost fact is that rei's core is a higher-order metaprogramming language."),(0,a.kt)("h2",{id:"rei-vm"},"Rei VM"),(0,a.kt)("p",null,"Even though rei is meant to be a language for neutron core and app development, it works in a VM too (also riscv and arm, but we'll talk about that later)."),(0,a.kt)("p",null,"The VM is pretty much a complete platform for running rei programs. Most std functionalities just work. ",(0,a.kt)("inlineCode",{parentName:"p"},"core::arch")," are specific to platforms your developing for."),(0,a.kt)("admonition",{title:"Progress List",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Drew up codebase for main libraries"),(0,a.kt)("li",{parentName:"ul"},"Refactor the idea to take arbitrary expressions and treat macros like any other keyword"),(0,a.kt)("li",{parentName:"ul"},"Ability to treat macros like any other function and simply use them by including the base prelude library which exports ",(0,a.kt)("inlineCode",{parentName:"li"},"Expr")," among other parser nodes"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implementation of each component and tests in rust"),(0,a.kt)("li",{parentName:"ul"},"Type inference and smart consteval and caching")),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"base-language-specification"},"Base Language Specification"),(0,a.kt)("p",null,"Expressions, expressions, expressions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// \' \' means any whitespace. Means follow\n// ~ means horizontal whitespace. Means directly follow\n// identation and whitespace is significant\n// newlines are significant and marks a new expression in most cases\n// or the body of a nested expression\n\nexpr:\n    | paren_expr\n    | empty_expr\n    | bracket_list_expr\n    | unary_op\n    | binary_op\n    | ternary_op\n    | general_def\n    | scope_expr\n    | modified_scope_expr\n    | var_def_expr\n    | literal_expr\n    | ident_expr\n    | ident_list_expr\n    | comma_expr\n\n// GENERAL DEF\ngeneral_def: raw_ident generic_param_expr? ":" general_def_type\ngeneral_def_type: parameterised_expr | ("extend"? algebraic_expr) | mod_scope | replace_expr\ngeneric_param_expr: "[" generic_param* "]"\ngeneric_param: (raw_ident ~ ":")? ident impl_expr?\n\n// ALGEBRAIC\nalgebraic_expr: alias_expr | enum_expr | product_expr\nalias_expr: ident\nenum_expr: ("enum" scope_expr) | (ident ("|" ident)+)\n\n// PARAMETERISED\nparameterised_expr: paren_param_list+ ret_type? (eval_expr | scope_expr)\nparen_param_list: "(" param ("," param)* ")"\nparam: raw_ident type_expr? refinements?\ntype_expr: ":" ident arg_expr?\nrefinements: refinement ("," refinement)*\nrefinement: unary_refinement_op ident_or_literal\n\nimpl_expr: "impl" ident ("+" ident)*\n\nreplace_expr: "replace" parameterised_expr | scope_expr\n\ncall_expr: expr ~ "(" comma_expr ")"\n\n\nraw_ident: pub_ident | priv_ident\npriv_ident: "_"pub_ident\npub_ident: "[a-zA-Z][\\w\\d_]"\n\nident_or_literal: ident | literal\n\nident: namespaced_ident\nnamespaced_ident: raw_ident ("::"raw_ident)*\n\nliteral_expr: numeric | string\n\neval_expr: "=>" expr\n\ncomma_expr[expr]: expr ~ ("," expr)* ","?\nempty_expr: "(" ")"\nbracket_expr: "[" expr "]"\nbracket_list_expr: bracket_expr\nvar_def_expr: "let" | "mut" | "const" ident "=" expr\nternary_op: (expr ~ "?" ~ expr ":" expr) | (expr ~ "?:" expr)\n\nkeywords: "return" | "async" | "await" | "yield" | "export" | "mod" | "trait" | "impl" | "deref" | "ref"\n\n// OPERATORS [Increasing Order Precedence]\nbinary_op: expr ~ binary_operator ~ expr\nbinary_operator: "&" | "|" | "^" | "*" | "/" | "+" | "-" | "==" | "="\npostfix_unary_operator: "?" | "!"\nprefix_unary_operator: "~" | "*" | "&"\nunary_refinement_op: binary_operator\nself_op: "."\n\nrefinement_expr: expr\n\n// MACROS\nscope_expr: "{" expr* "}"\nmodified_scope_expr: m1_expr | m2_expr\nm1_expr: raw_ident ~ scope_expr\nm2_expr: raw_ident ~ macro_params? scope_expr\n')))}m.isMDXComponent=!0}}]);