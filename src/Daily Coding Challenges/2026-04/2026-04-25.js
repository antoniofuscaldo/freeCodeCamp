/**

Word Decompressor

Given a compressed string, return the decompressed version using the following rules:

The given string is made up of words and numbers separated by spaces.
Leave the words unchanged.
Replace numbers with the word at that position, where the first word is at position 1.
For example, given "practice makes perfect and 3 1 2 3", return "practice makes perfect and perfect practice makes perfect".

*/

function decompress(str) {
  const tokens = str.split(' ');
  const result = [];

  for (const token of tokens) {
    if (/^\d+$/.test(token)) {
      const index = parseInt(token, 10) - 1;
      result.push(result[index]);
    } else {
      result.push(token);
    }
  }

  return result.join(' ');
}
