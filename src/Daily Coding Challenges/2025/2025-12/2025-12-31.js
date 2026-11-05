/** 

Markdown Italic Parser

Given a string that may include some italic text in Markdown, return the equivalent HTML string.

Italic text in Markdown is any text that starts and ends with a single asterisk (*) or a single underscore (_).
There cannot be any spaces between the text and the asterisk or underscore, but there can be spaces in the text itself.
Convert all italic occurrences to HTML i tags and return the string.
For example, given "*This is italic*", return "<i>This is italic</i>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

*/

function parseItalics(markdown) {
  return markdown.replace(/(\*|_)(\S(?:.*?\S)?)\1/g, '<i>$2</i>');
}
