if ( $args.Count -ne 1 ) {
  Write-Output "Please supply a single argument like: 'name-of-idea'"
  exit 1
}

Write-Output "File suffix specified is $($args[0])"
$DATE = date "+%Y-%m-%d"
Write-Output "Date is $DATE"

$null >> "_posts/$DATE-$($args[0]).md"

Write-Output "---
layout: post
title: Something
---
## Idea 1
"| Tee-Object "_posts/$DATE-$($args[0]).md"
