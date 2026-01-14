/**

Markdown Link Parser

Given the string of a link in Markdown, return the equivalent HTML string.

A Markdown image has the following format: "[link_text](link_url)". Return the string of the HTML a tag with the href set to the link_url and the link_text as the tag content.

For example, given "[freeCodeCamp](https://freecodecamp.org/)" return '<a href="https://freecodecamp.org/">freeCodeCamp</a>';

Note: The console may not display HTML tags in strings when logging messages — check the browser console to see logs with tags included.

*/

function parseLink(markdown) {
  const text = markdown.slice(markdown.indexOf('[') + 1, markdown.indexOf(']'));
  const url = markdown.slice(markdown.indexOf('(') + 1, markdown.indexOf(')'));
  return `<a href="${url}">${text}</a>`;
}
