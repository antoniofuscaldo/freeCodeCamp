/**

Longest Common Substring

Given a string, return the longest substring that appears more than once.

The substrings can overlap.

Tests:
Waiting:1. getLongestSubstring("abracadabra") should return "abra".
Waiting:2. getLongestSubstring("hello world hello") should return "hello".
Waiting:3. getLongestSubstring("mississippi") should return "issi".
Waiting:4. getLongestSubstring("ha ha ha ha ha ha ha") should return "ha ha ha ha ha ha".
Waiting:5. getLongestSubstring("the quick brown fox jumped over the lazy dog that the quick brown fox jumped over") should return "the quick brown fox jumped over".

*/

export function getLongestSubstring(str) {
  let best = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const sub = str.slice(i, j);
      if (sub.length > best.length && str.indexOf(sub, i + 1) !== -1)
        best = sub;
    }
  }

  return best;
}
