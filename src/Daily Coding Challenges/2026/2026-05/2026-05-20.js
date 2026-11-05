/**

String Zipper

Given two strings, return a new string that interleaves their characters one at a time. If one string is longer, append the remaining characters at the end.

Begin with the first character of the first string.

Tests:
Waiting:1. zipStrings("abc", "123") should return "a1b2c3".
Waiting:2. zipStrings("acegikmoqsuwy", "bdfhjlnprtvxz") should return "abcdefghijklmnopqrstuvwxyz".
Waiting:3. zipStrings("day", "night") should return "dnaiyght".
Waiting:4. zipStrings("python", "javascript") should return "pjyatvhaosncript".
Waiting:5. zipStrings("feCdCm", "reoeap") should return "freeCodeCamp".

*/

export function zipStrings(a, b) {
  let out = '';
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    if (i < a.length) out += a[i];
    if (i < b.length) out += b[i];
  }
  return out;
}
