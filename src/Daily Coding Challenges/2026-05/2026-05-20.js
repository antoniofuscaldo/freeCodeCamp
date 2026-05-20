/**

String Zipper

Given two strings, return a new string that interleaves their characters one at a time. If one string is longer, append the remaining characters at the end.

Begin with the first character of the first string.

*/

function zipStrings(a, b) {
  let out = '';
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    if (i < a.length) out += a[i];
    if (i < b.length) out += b[i];
  }
  return out;
}
