/**

String Count

Given two strings, determine how many times the second string appears in the first.

The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.

*/

function count(text, pattern) {
  let c = 0;
  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (text.slice(i, i + pattern.length) === pattern) {
      c++;
    }
  }
  return c;
}
