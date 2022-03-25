if ( $args.Count -ne 1 ) {
  Write-Output "Please supply a single argument like: 'name-of-idea'"
  exit 1
}

Write-Output "File suffix specified is $($args[0])"
$DATE = date -format "yyyy-MM-dd"
Write-Output "Date is $DATE"
$TITLE = (Get-Culture).TextInfo.ToTitleCase($args[0])

$null >> "_posts/$DATE-$($args[0]).md"

Write-Output "---`nlayout: post`ntitle: $TITLE`n---`n`n## Idea 1`n`n"| Tee-Object "_posts/$DATE-$($args[0]).md"
