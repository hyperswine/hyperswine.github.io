---
layout: post
title: Antarctican English
---

Alphabet. probably based on a modification of the latin alphabet with upper and lowercase characters
Grammar. based on english SVO and active voice by default. Proper nouns begin with an uppercase. All other words and start of sentence words should begin with lowercase characters.

Phonetics. Combine a lean but general enough alphabet that can create most sounds a human can speak

Tonals. Incorporate things like boldface, emphasis, underline directly into the language
Glyphs. Incoporate custom glyphs to denote abstract concepts like mathematical objects, geometric shapes. Probably like mesopotamian with lines for numbers and abbreviations like "M" for mega which can be directly appended to numeral glyphs.

Some letters of the alphabet are used to encode the most regular suffixes in the SI notation. Namely, milli, mega, kilo, giga. Others can be encoded on demand.

```rust
1m = "1 milli"
1k = "1 kilo"
1M = "1 mega"
1G = "1 giga"
```

The same suffixes could be shared with other units like "meters" depending on the context. A legend could be used on a per paper or per page or per block basis. The legend for a page should be defined in the footnote for formal texts.

Numeral glyphs define the hindu arabic numerals. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.

Special characters and usages of alphabet characters or sequences of characters include:
"I" for "i" when referring to yourself. Whether at the start or not.

Tense. When something happened can be encoded easily into verbs with an `-d` ending. Most of the time you might not even need to tense if the context is implied.

Implication. Things like definitives, infinitives, tense, possession can be implied and not have to be specified explicitly. Even english already does so, like "he was quite loud". This sentence would be grammatically correct, but we are using a vague identifier "he", which could refer to any male. In a given context, perhaps something like "Alex is such a nutter. He was quite loud", it would potentially make more sense.

Latin words. I think latin words or words with latin roots should just use the original latin spelling if its easier to say.

Sample:

```rust
// informal
I go park & play kids

// formal
I go-d to the park and play-d with my kids

// formal english
I went to the park and played with my kids
```

Contexts. are actually a thing.

```rust
// trailing periods are not necessary if you are using new lines
// indentations are used to mark a contextual chunk or paragraph
// unlike english, sentences and paragraphs actually do have very formal and defined semantics

// here, "return" is used to imply that they started from home initially, either right before the park or earlier
// I is also implied, so no need to mention "I" again
I go park
    then return home

// same sentence but using "." to demarcate sentences or self contained correct sequences
I go park . then return home

// changes the meaning of the chunk
// instead of I went to the park then returned home afterwards
// this means "I went to the park to go home"
// when nothing is used, a "to" is implied
I go park . return home

// while you can mark the end of a sentence with a period
// it is often useful to use other connectives like a comma to mark a list of related expressors
// as well as other glyphs like & for "and", ":" for definition of a glyph or something

I created list . list was : Apples, Oranges, Bananas

```
