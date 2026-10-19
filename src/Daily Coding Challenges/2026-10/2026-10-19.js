/**

HTML Attribute Extractor

Given a string of a valid HTML element, return the attributes of the element using the following criteria:

You will only be given one element.
Attributes will be in the format: attribute="value".
Return an array of strings with each attribute property and value, separated by a comma, in this format: ["attribute1, value1", "attribute2, value2"].
Return attributes in the order they are given.
If no attributes are found, return an empty array.

Tests:
Waiting:1. extractAttributes('<span class="red"></span>') should return ["class, red"].
Waiting:2. extractAttributes('<meta charset="UTF-8" />') should return ["charset, UTF-8"].
Waiting:3. extractAttributes("<p>Lorem ipsum dolor sit amet</p>") should return [].
Waiting:4. extractAttributes('<input name="email" type="email" required="true" />') should return ["name, email", "type, email", "required, true"].
Waiting:5. extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>') should return ["id, submit", "class, btn btn-primary"].

*/

export function extractAttributes(element) {
  const tag = element.match(/^<[^>]+>/)[0];
  const attrs = [];
  const re = /([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
  let match;

  while ((match = re.exec(tag)) !== null) {
    attrs.push(`${match[1]}, ${match[2] ?? match[3]}`);
  }

  return attrs;
}
