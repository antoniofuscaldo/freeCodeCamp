/**

Smallest Gap

Given a string, return the substring between the two identical characters that have the smallest number of characters between them (smallest gap).

There will always be at least one pair of matching characters.
The returned substring should exclude the matching characters.
If two or more gaps are the same length, return the characters from the first one.
For example, given "ABCDAC", return "DA".

Only "A" and "C" repeat in the string.
The number of characters between the two "A" characters is 3, and between the "C" characters is 2.
So return the string between the two "C" characters.

*/

function smallestGap(s) {
  const pos = {};
  let best = 1e9,
    out = '';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (!pos[c]) pos[c] = [];
    pos[c].push(i);

    const arr = pos[c];
    if (arr.length > 1) {
      const prev = arr[arr.length - 2];
      const g = i - prev - 1;
      if (g < best) {
        best = g;
        out = s.slice(prev + 1, i);
      }
    }
  }

  return out;
}
