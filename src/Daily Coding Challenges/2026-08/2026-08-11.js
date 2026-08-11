/**

Vowel Balance

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

The string can contain any characters.
The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
If there's an odd number of characters in the string, ignore the center character.

Tests:
Waiting:1. isBalanced("racecar") should return true.
Waiting:2. isBalanced("Lorem Ipsum") should return true.
Waiting:3. isBalanced("Kitty Ipsum") should return false.
Waiting:4. isBalanced("string") should return false.
Waiting:5. isBalanced(" ") should return true.
Waiting:6. isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.
Waiting:7. isBalanced("123A#b!E&*456-o.U") should return true.

*/

export function isBalanced(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const n = s.length;
  if (n === 0) return true;

  const mid = Math.floor(n / 2);
  let leftCount = 0;
  let rightCount = 0;

  for (let i = 0; i < mid; i++) {
    if (vowels.has(s[i])) leftCount++;
  }

  const startRight = n % 2 === 0 ? mid : mid + 1;
  for (let i = startRight; i < n; i++) {
    if (vowels.has(s[i])) rightCount++;
  }

  return leftCount === rightCount;
}
