/**

Most Frequent

Given an array of elements, return the element that appears most frequently.

There will always be a single most frequent element.

*/

function mostFrequent(arr) {
  const freq = {};
  let maxCount = 0,
    most = null;
  for (const el of arr) {
    freq[el] = (freq[el] || 0) + 1;
    if (freq[el] > maxCount) {
      maxCount = freq[el];
      most = el;
    }
  }
  return most;
}
