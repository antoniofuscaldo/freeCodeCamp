/**

Anagram Checker

Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

Ignore casing and white space.

*/

function areAnagrams(str1, str2) {
  const normalize = (str) =>
    str.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
  return normalize(str1) === normalize(str2);
}
