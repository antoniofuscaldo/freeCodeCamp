/**
 *
 Markdown Image Parser

 Given a string of an image in Markdown, return the equivalent HTML string.

 A Markdown image has the following format: "![alt text](image_url)". Where:

 alt text is the description of the image (the alt attribute value).
 image_url is the source URL of the image (the src attribute value).
 Return a string of the HTML img tag with the src set to the image URL and the alt set to the alt text.

 For example, given "![Cute cat](cat.png)" return '<img src="cat.png" alt="Cute cat">';

 Make sure the tag, order of attributes, spacing, and quote usage is the same as above.
 Note: The console may not display HTML tags in strings when logging messages — check the browser console to see logs with tags included.

 */

function parseImage(markdown) {
  const match = markdown.match(/^!\[([^\]]*)\]\(([^)]+)\)$/),
    alt = match[1],
    src = match[2];

  return `<img src="${src}" alt="${alt}">`;
}
