/**

Vowels and Consonants

Given a string, return an array with the number of vowels and number of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].

Tests:
Waiting:1. count("Hello World") should return [3, 7].
Waiting:2. count("JavaScript") should return [3, 7].
Waiting:3. count("Python") should return [1, 5].
Waiting:4. count("freeCodeCamp") should return [5, 7].
Waiting:5. count("Hello, World!") should return [3, 7].
Waiting:6. count("The quick brown fox jumps over the lazy dog.") should return [11, 24].

*/

export function count(str) {
  const letters = str.match(/[a-z]/gi) || [];
  let vowels = 0;
  for (const c of letters) {
    if ('aeiouAEIOU'.includes(c)) vowels++;
  }
  return [vowels, letters.length - vowels];
}
