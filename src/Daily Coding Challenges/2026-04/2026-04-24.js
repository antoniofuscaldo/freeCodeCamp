/**

Word Compressor

Given a string, return a compressed version of the string using the following rules:

The first occurrence of a word remains unchanged.
Subsequent occurrences are replaced with the position of the first occurrence, where the first word is at position 1.
Words are separated by a single space.
For example, given "practice makes perfect and perfect practice makes perfect", return "practice makes perfect and 3 1 2 3".

*/

function compress(str) {
  const words = str.split(' ');
  const firstPos = new Map();
  const result = [];
  let pos = 1;

  for (const w of words) {
    if (firstPos.has(w)) {
      result.push(firstPos.get(w).toString());
    } else {
      result.push(w);
      firstPos.set(w, pos);
    }
    pos++;
  }
  return result.join(' ');
}
