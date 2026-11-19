/**

Markdown Heading Converter

Given a string representing a Markdown heading, return the equivalent HTML heading.

A valid Markdown heading must:

Start with zero or more spaces, followed by
1 to 6 hash characters (#) in a row, then
At least one space. And finally,
The heading text.
The number of hash symbols determines the heading level. For example, one hash symbol corresponds to an h1 tag, and six hash symbols correspond to an h6 tag.

If the given string doesn't have the exact format above, return "Invalid format".

For example, given "# My level 1 heading", return "<h1>My level 1 heading</h1>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

Tests:
Waiting:1. convert("# My level 1 heading") should return "<h1>My level 1 heading</h1>".
Waiting:2. convert("My heading") should return "Invalid format".
Waiting:3. convert("##### My level 5 heading") should return "<h5>My level 5 heading</h5>".
Waiting:4. convert("#My heading") should return "Invalid format".
Waiting:5. convert("  ###  My level 3 heading") should return "<h3>My level 3 heading</h3>".
Waiting:6. convert("####### My level 7 heading") should return "Invalid format".
Waiting:7. convert("## My #2 heading") should return "<h2>My #2 heading</h2>".

*/

export function convert(heading) {
  const match = heading.match(/^ *(#{1,6}) +(.+)$/);
  if (!match) return 'Invalid format';
  const level = match[1].length;
  return `<h${level}>${match[2]}</h${level}>`;
}
