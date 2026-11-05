/**

Vowels and Consonants

Given a string, return an array with the number of vowels and number of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].

*/

function count(str) {
  let consonants = 0,
    vowels = 0;
  for (const ch of str) {
    if (/[a-zA-Z]/.test(ch)) {
      if ('aeiouAEIOU'.includes(ch)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  return [vowels, consonants];
}
