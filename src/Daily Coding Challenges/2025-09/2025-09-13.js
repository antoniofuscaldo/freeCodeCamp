/**

Missing Numbers

Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

The given array may be unsorted and may contain duplicates.
The returned array should be in ascending order.
If no integers are missing, return an empty array.

*/

function findMissingNumbers(arr) {
  if (arr.length === 0) return [];
  let n = Math.max(...arr);
  let set = new Set(arr);
  let missing = [];
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      missing.push(i);
    }
  }
  return missing;
}
