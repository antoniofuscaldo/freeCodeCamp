/**

Pangram

Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.

*/

function isPangram(sentence, letters) {
  const clean = sentence.toLowerCase().replace(/[^a-z]/g, ''),
    sentenceSet = new Set(clean),
    lettersSet = new Set(letters);
  for (const ch of lettersSet) {
    if (!sentenceSet.has(ch)) return false;
  }
  for (const ch of sentenceSet) {
    if (!lettersSet.has(ch)) return false;
  }
  return true;
}
