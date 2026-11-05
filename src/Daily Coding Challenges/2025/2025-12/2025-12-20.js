/**

Purge Most Frequent

Given an array of values, remove all occurrences of the most frequently occurring element and return the resulting array.

If multiple values are tied for most frequent, remove all of them.
Do not change any of the other elements or their order.

*/

function purgeMostFrequent(arr) {
  if (arr.length === 0) return [];

  const freq = {};
  for (const val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }

  const maxFreq = Math.max(...Object.values(freq));

  return arr.filter((val) => freq[val] !== maxFreq);
}
