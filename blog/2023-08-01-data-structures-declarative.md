---
layout: post
title: Data Structures and Algorithms for Declarative Programming
---

Declarative programming usually involves functional or logic programming. For functional programming...

The basics:

```hs
data List a = Empty | Node a (List a)

data BinaryTree a = Empty | Node a (Tree a) (Tree a)

type AssociationList k v = [(k, v)]

-- basically an adjacency list. Could also use a map
type Graph a = [(a, [a])]
type Graph2 a = Map a [a]
```

How does haskell implement data structures?

```hs
-- a binary balanced tree
data Map k v = Bin Size k v (Map k v) (Map k v) | Tip
```
