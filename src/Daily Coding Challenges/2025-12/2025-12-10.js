/**

Markdown Bold Parser

Given a string that may include some bold text in Markdown, return the equivalent HTML string.

Bold text in Markdown is any text that starts and ends with two asterisks (**) or two underscores (__).
There cannot be any spaces between the text and the asterisks or underscores, but there can be spaces in the text itself.
Convert all bold occurrences to HTML b tags and return the string.
For example, given "**This is bold**", return "<b>This is bold</b>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

*/

function parseBold(markdown) {
  return markdown
    .replace(/\*\*([^\s](?:.*?[^\s])?)\*\*/g, '<b>$1</b>')
    .replace(/__([^\s](?:.*?[^\s])?)__/g, '<b>$1</b>');
}
