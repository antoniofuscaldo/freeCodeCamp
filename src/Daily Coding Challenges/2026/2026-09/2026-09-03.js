/**

Pangram

Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.

Tests:
Waiting:1. isPangram("hello", "helo") should return true
Waiting:2. isPangram("hello", "hel") should return false
Waiting:3. isPangram("hello", "helow") should return false
Waiting:4. isPangram("hello world", "helowrd") should return true
Waiting:5. isPangram("Hello World!", "helowrd") should return true
Waiting:6. isPangram("Hello World!", "heliowrd") should return false
Waiting:7. isPangram("freeCodeCamp", "frcdmp") should return false
Waiting:8. isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return true

*/

export function isPangram(sentence, letters) {
  // Normalize
  const required = new Set(letters);
  const used = new Set();

  for (const ch of sentence.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
      used.add(ch);
    }
  }

  for (const ch of required) {
    if (!used.has(ch)) return false;
  }

  for (const ch of used) {
    if (!required.has(ch)) return false;
  }

  return true;
}
