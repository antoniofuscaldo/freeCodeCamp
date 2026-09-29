/**

Longest Word

Given a sentence, return the longest word in the sentence.

Ignore periods (.) when determining word length.
If multiple words are ties for the longest, return the first one that occurs.

Tests:
Waiting:1. getLongestWord("coding is fun") should return "coding".
Waiting:2. getLongestWord("Coding challenges are fun and educational.") should return "educational".
Waiting:3. getLongestWord("This sentence has multiple long words.") should return "sentence".

*/

export function getLongestWord(sentence) {
  let longest = '';

  for (const word of sentence.split(/\s+/)) {
    const length = word.replace(/\./g, '').length;
    if (length > longest.replace(/\./g, '').length) {
      longest = word.replace(/\./g, '');
    }
  }

  return longest;
}
