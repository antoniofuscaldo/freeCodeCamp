/**

HTML Content Extractor

Given a string of HTML, return the plain text content with all tags removed.

*/

function extractContent(html) {
  if (typeof html !== 'string') return '';
  return html.replace(/<[^>]*>/g, '');
}
