/**

Duplicate Character Count

Given two strings, return a count of characters from the second string that can be found in the first.

Duplicate characters in the second string are counted separately.

*/

function duplicateCharacterCount(str1, str2) {
  const set = new Set(str1);
  let count = 0;
  for (const ch of str2) if (set.has(ch)) count++;
  return count;
}
