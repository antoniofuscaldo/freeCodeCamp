/**

HTML Content Extractor

Given a string of HTML, return the plain text content with all tags removed.

Tests:
Waiting:1. extractContent('<p>hello world</p>') should return "hello world".
Waiting:2. extractContent('<p>hello <span>world</span></p>') should return "hello world".
Waiting:3. extractContent('<a href="example.com">Click me</a>') should return "Click me".
Waiting:4. extractContent('<p><button onClick="learnToCode()">Learn</button> to <code>code<code> <br/>for <strong>free</strong> <br/>on <a href="https://freecodecamp.org/" target="_blank"><span class="highlight">freecodecamp</span>.org</a>') should return "Learn to code for free on freecodecamp.org".
Waiting:5. extractContent('<div class="container"><h1 id="title">Welcome to <strong>My</strong> Website.</h1><p>This is a <a href="https://example.com" target="_blank">link</a> to something <em>really</em> <span class="highlight">important</span>.</p><ul><li>Item <strong>one</strong></li><li>Item <em>two</em></li><li>Item three</li></ul><img src="pic.jpg" alt="A picture"/><p class="footer">Contact us at <a href="mailto:hello@example.com">hello@example.com</a> for <span>more <strong>info</strong></span>.</p></div>') should return "Welcome to My Website.This is a link to something really important.Item oneItem twoItem threeContact us at hello@example.com for more info.".

*/

export function extractContent(html) {
  if (typeof html !== 'string') return '';
  return html.replace(/<[^>]*>/g, '');
}
