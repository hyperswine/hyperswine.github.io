#!/bin/bash

if [ $# -ne 1 ]
  then
    echo "Please supply a single argument like: 'name-of-idea'"
    exit 1
fi

DATE=`date "+%Y-%m-%d"`

cat > "_posts/$DATE-$1.md" << ENDOFFILE
---
layout: post
title: Something
---
## Idea 1
ENDOFFILE
