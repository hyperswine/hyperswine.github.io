---
date: 2022-12-17
name: Jasen Qin
title: Rei Language
url: https://github.com/hyperswine
email: jasen.qin33@gmail.com
---

**Rei is not meant to be a traditional language**
A big thing about rei is that it is not meant to be a language that works in a traditional way. What this means is that many of its concepts, although might feel familiar, can also be quite a lot different. The first and foremost fact is that rei's core is a higher-order metaprogramming language.

## Rei VM

Even though rei is meant to be a language for neutron core and app development, it works in a VM too (also riscv and arm, but we'll talk about that later).

The VM is pretty much a complete platform for running rei programs. Most std functionalities just work. `core::arch` are specific to platforms your developing for.

:::info Progress List

- Drew up codebase for main libraries
- Refactor the idea to take arbitrary expressions and treat macros like any other keyword
- Ability to treat macros like any other function and simply use them by including the base prelude library which exports `Expr` among other parser nodes

:::

- Implementation of each component and tests in rust
- Type inference and smart consteval and caching

:::

## Base Language Specification

Expressions, expressions, expressions.

```rust
// ' ' means any whitespace. Means follow
// ~ means horizontal whitespace. Means directly follow
// identation and whitespace is significant
// newlines are significant and marks a new expression in most cases
// or the body of a nested expression

expr:
    | paren_expr
    | empty_expr
    | bracket_list_expr
    | unary_op
    | binary_op
    | ternary_op
    | general_def
    | scope_expr
    | modified_scope_expr
    | var_def_expr
    | literal_expr
    | ident_expr
    | ident_list_expr
    | comma_expr

// GENERAL DEF
general_def: raw_ident generic_param_expr? ":" general_def_type
general_def_type: parameterised_expr | ("extend"? algebraic_expr) | mod_scope | replace_expr
generic_param_expr: "[" generic_param* "]"
generic_param: (raw_ident ~ ":")? ident impl_expr?

// ALGEBRAIC
algebraic_expr: alias_expr | enum_expr | product_expr
alias_expr: ident
enum_expr: ("enum" scope_expr) | (ident ("|" ident)+)

// PARAMETERISED
parameterised_expr: paren_param_list+ ret_type? (eval_expr | scope_expr)
paren_param_list: "(" param ("," param)* ")"
param: raw_ident type_expr? refinements?
type_expr: ":" ident arg_expr?
refinements: refinement ("," refinement)*
refinement: unary_refinement_op ident_or_literal

impl_expr: "impl" ident ("+" ident)*

replace_expr: "replace" parameterised_expr | scope_expr

call_expr: expr ~ "(" comma_expr ")"


raw_ident: pub_ident | priv_ident
priv_ident: "_"pub_ident
pub_ident: "[a-zA-Z][\w\d_]"

ident_or_literal: ident | literal

ident: namespaced_ident
namespaced_ident: raw_ident ("::"raw_ident)*

literal_expr: numeric | string

eval_expr: "=>" expr

comma_expr[expr]: expr ~ ("," expr)* ","?
empty_expr: "(" ")"
bracket_expr: "[" expr "]"
bracket_list_expr: bracket_expr
var_def_expr: "let" | "mut" | "const" ident "=" expr
ternary_op: (expr ~ "?" ~ expr ":" expr) | (expr ~ "?:" expr)

keywords: "return" | "async" | "await" | "yield" | "export" | "mod" | "trait" | "impl" | "deref" | "ref"

// OPERATORS [Increasing Order Precedence]
binary_op: expr ~ binary_operator ~ expr
binary_operator: "&" | "|" | "^" | "*" | "/" | "+" | "-" | "==" | "="
postfix_unary_operator: "?" | "!"
prefix_unary_operator: "~" | "*" | "&"
unary_refinement_op: binary_operator
self_op: "."

refinement_expr: expr

// MACROS
scope_expr: "{" expr* "}"
modified_scope_expr: m1_expr | m2_expr
m1_expr: raw_ident ~ scope_expr
m2_expr: raw_ident ~ macro_params? scope_expr
```
