/** 

VOwElcAsE

Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

Vowels are "a", "e", "i", "o", and "u" in any case.
Non-alphabetical characters should remain unchanged.

*/

function vowelCase(str) {
  const vowels = 'aeiou';

  return str
    .split('')
    .map((char) => {
      const lower = char.toLowerCase();

      if (vowels.includes(lower)) {
        return char.toUpperCase();
      }

      if (/[a-z]/i.test(char)) {
        return char.toLowerCase();
      }

      return char;
    })
    .join('');
}
