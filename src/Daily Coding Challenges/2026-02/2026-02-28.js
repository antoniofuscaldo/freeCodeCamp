/**

Add Punctuation

Given a string of sentences with missing periods, add a period (".") in the following places:

Before each space that comes immediately before an uppercase letter
And at the end of the string
Return the resulting string.

*/

function addPunctuation(sentences) {
  let out = '';

  for (let i = 0; i < sentences.length; i++) {
    const c = sentences[i];
    const next = sentences[i + 1];

    if (c === ' ' && next && next >= 'A' && next <= 'Z') {
      out += '. ';
    } else {
      out += c;
    }
  }

  if (!out.endsWith('.')) out += '.';

  return out;
}
