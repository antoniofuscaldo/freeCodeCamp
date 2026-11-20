/**

Longest Word

Given a sentence string, return the longest word in the sentence.

Words are separated by a single space.
Only letters (a-z, case-insensitive) count toward the word's length.
If there are multiple words with the same length, return the first one that appears.
Return the word as it appears in the given string, with punctuation removed.

Tests:
Waiting:1. longestWord("The quick red fox") should return "quick".
Waiting:2. longestWord("Hello coding challenge.") should return "challenge".
Waiting:3. longestWord("Do Try This At Home.") should return "This".
Waiting:4. longestWord("This sentence... has commas, ellipses, and an exclamation point!") should return "exclamation".
Waiting:5. longestWord("A tie? No way!") should return "tie".
Waiting:6. longestWord("Wouldn't you like to know.") should return "Wouldnt".

*/

export function longestWord(sentence) {
  let best = '';
  let max = 0;

  for (const word of sentence.split(' ')) {
    const clean = word.replace(/[^a-zA-Z]/g, '');
    if (clean.length > max) {
      max = clean.length;
      best = clean;
    }
  }

  return best;
}
