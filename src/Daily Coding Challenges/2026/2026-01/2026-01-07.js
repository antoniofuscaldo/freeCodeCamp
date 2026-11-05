/** 

Markdown Unordered List Parser

Given the string of a valid unordered list in Markdown, return the equivalent HTML string.

An unordered list consists of one or more list items. A valid list item appears on its own line and:

Starts with a dash ("-"), followed by
At least one space, and then
The list item text.
The list is given as a single string with new lines separated by the newline character ("\n"). Do not include the newline characters in the item text.

Wrap each list item in HTML li tags, and the whole list of items in ul tags.

For example, given "- Item A\n- Item B", return "<ul><li>Item A</li><li>Item B</li></ul>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

*/

function parseUnorderedList(markdown) {
  const lines = markdown.split('\n'),
    items = lines.map((line) => {
      const text = line.replace(/^-+\s+/, '');
      return `<li>${text}</li>`;
    });

  return `<ul>${items.join('')}</ul>`;
}
