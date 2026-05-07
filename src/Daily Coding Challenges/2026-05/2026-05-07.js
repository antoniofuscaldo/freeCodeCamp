/**

Longest Common Substring

Given a string, return the longest substring that appears more than once.

The substrings can overlap.

*/

function getLongestSubstring(str) {
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
