/**

Anagram Groups

Given an array of words, return a 2d array of the words grouped into anagrams.

Words are anagrams if they contain the same letters in any order.
Each word belongs to exactly one group.
Return order doesn't matter.
For example, given ["listen", "silent", "hello", "enlist", "world"], return [["listen", "silent", "enlist"], ["hello"], ["world"]].

*/

function groupAnagrams(words) {
  const groups = {};

  for (const w of words) {
    const key = w.split('').sort().join('');
    (groups[key] ||= []).push(w);
  }

  return Object.values(groups);
}
