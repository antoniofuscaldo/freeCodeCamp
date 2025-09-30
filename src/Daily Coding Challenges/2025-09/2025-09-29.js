/**

Longest Word

Given a sentence, return the longest word in the sentence.

Ignore periods (.) when determining word length.
If multiple words are ties for the longest, return the first one that occurs.

*/

function getLongestWord(sentence) {
  let words = sentence.replace(/\./g, "").split(" ");
  return words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );
}
