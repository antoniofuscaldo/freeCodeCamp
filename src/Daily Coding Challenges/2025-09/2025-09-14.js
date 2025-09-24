/**

Word Frequency

Given a paragraph, return an array of the three most frequently occurring words.

Words in the paragraph will be separated by spaces.
Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
The returned array should have all lowercase words.
The returned array should be in descending order with the most frequently occurring word first.

*/

function getWords(paragraph) {
  let clean = paragraph.toLowerCase().replace(/[,.!]/g, "");
  let words = clean.split(/\s+/).filter(Boolean);
  let freq = {};
  for (let word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  let sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, 3).map((entry) => entry[0]);
}
