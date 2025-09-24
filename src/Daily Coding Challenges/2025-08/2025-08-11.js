/**

Vowel Balance

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

The string can contain any characters.
The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
If there's an odd number of characters in the string, ignore the center character.

*/

function isBalanced(s) {
  const vowels = "aeiouAEIOU";
  let n = s.length;
  if (n % 2 !== 0) {
    s = s.slice(0, Math.floor(n / 2)) + s.slice(Math.floor(n / 2) + 1);
    n = s.length;
  }
  let half = n / 2;
  let firstHalf = s.slice(0, half);
  let secondHalf = s.slice(half);
  function countVowels(str) {
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) count++;
    }
    return count;
  }
  return countVowels(firstHalf) === countVowels(secondHalf);
}
