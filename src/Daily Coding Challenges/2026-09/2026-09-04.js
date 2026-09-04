/**

Vowel Repeater

Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
The original vowel should keeps its case.
Repeated vowels should be lowercase.
All non-vowel characters should keep their original case.

Tests:
Waiting:1. repeatVowels("hello world") should return "helloo wooorld".
Waiting:2. repeatVowels("freeCodeCamp") should return "freeeCooodeeeeCaaaaamp".
Waiting:3. repeatVowels("AEIOU") should return "AEeIiiOoooUuuuu".
Waiting:4. repeatVowels("I like eating ice cream in Iceland") should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand".

*/

export function repeatVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let count = 0;
  let out = '';

  for (const ch of str) {
    if (vowels.has(ch)) {
      count++;
      out += ch;
      out += ch.toLowerCase().repeat(count - 1);
    } else {
      out += ch;
    }
  }

  return out;
}
