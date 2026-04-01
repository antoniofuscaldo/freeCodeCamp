/**

Prank Number

Given an array of numbers where all but one number follow a pattern, return a new array with the one number that doesn't follow the pattern fixed.

The pattern will be one of:

The numbers increase from one to the next by a fixed amount (addition).
The numbers decrease from one to the next by a fixed amount (subtraction).
For example, given [2, 4, 7, 8, 10] return [2, 4, 6, 8, 10].

*/

function fixPrankNumber(arr) {
  const n = arr.length;
  if (n <= 2) return arr.slice();

  const diffs = [];
  const freq = {};
  for (let i = 1; i < n; i++) {
    const d = arr[i] - arr[i - 1];
    diffs.push(d);
    if (!freq[d]) freq[d] = 0;
    freq[d]++;
  }

  let diff = null;
  for (const k in freq) {
    if (diff === null || freq[k] > freq[diff]) diff = Number(k);
  }

  const bad = [];
  for (let i = 0; i < diffs.length; i++) {
    if (diffs[i] !== diff) bad.push(i);
  }

  if (!bad.length) return arr.slice();

  let wrongIndex;
  if (bad.length === 1) {
    const k = bad[0];
    if (k === 0) wrongIndex = 0;
    else if (k === n - 2) wrongIndex = n - 1;
    else wrongIndex = k + 1;
  } else {
    wrongIndex = bad[0] + 1;
  }

  const res = new Array(n);
  if (wrongIndex === 0) res[0] = arr[1] - diff;
  else res[0] = arr[0];

  for (let i = 1; i < n; i++) res[i] = res[i - 1] + diff;

  return res;
}
