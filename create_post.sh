#!/bin/bash

DATE=`date "+%Y-%m-%d"`

cat > "_posts/$DATE-$1.md" << ENDOFFILE
---
layout: post
title: Something
---
## Title
ENDOFFILE
