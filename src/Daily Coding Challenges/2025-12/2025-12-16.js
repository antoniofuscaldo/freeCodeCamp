/**

Consonant Count

Given a string and a target number, determine whether the string contains exactly the target number of consonants.

Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
Ignore digits, punctuation, spaces, and other non-letter characters when counting.

*/

function hasConsonantCount(text, target) {
  const consonants = text
    .toLowerCase()
    .split('')
    .filter((ch) => /[a-z]/.test(ch) && !'aeiou'.includes(ch)).length;
  return consonants === target;
}
