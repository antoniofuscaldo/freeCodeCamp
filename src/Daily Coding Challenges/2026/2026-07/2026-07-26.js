/**

Letter Distance

Given two strings of equal length, return the sum of the shortest distances between each pair of characters.

The input will only contain lowercase letters
The alphabet is treated as a circle, so the distance between a and z is 1.

Tests:
Waiting:1. letterDistance("abc", "bcd") should return 3.
Waiting:2. letterDistance("abc", "xyz") should return 9.
Waiting:3. letterDistance("encrypt", "decrypt") should return 10.
Waiting:4. letterDistance("algorithm", "codeblock") should return 43.
Waiting:5. letterDistance("lobster", "penguin") should return 47.
Waiting:6. letterDistance("alligator", "crocodile") should return 55.

*/

export function letterDistance(str1, str2) {
  let total = 0;
  for (let i = 0; i < str1.length; i++) {
    const a = str1.charCodeAt(i) - 97;
    const b = str2.charCodeAt(i) - 97;
    const diff = Math.abs(a - b);
    total += Math.min(diff, 26 - diff);
  }
  return total;
}
