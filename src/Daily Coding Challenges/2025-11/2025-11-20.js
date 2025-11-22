/**

Longest Word

Given a sentence string, return the longest word in the sentence.

Words are separated by a single space.
Only letters (a-z, case-insensitive) count toward the word's length.
If there are multiple words with the same length, return the first one that appears.
Return the word as it appears in the given string, with punctuation removed.

*/

function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';

  for (const word of words) {
    const cleaned = word.replace(/[^a-zA-Z]/g, '');
    if (cleaned.length > longest.length) {
      longest = cleaned;
    }
  }

  return longest;
}
