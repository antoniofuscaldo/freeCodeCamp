/**

Missing Numbers

Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

The given array may be unsorted and may contain duplicates.
The returned array should be in ascending order.
If no integers are missing, return an empty array.

Tests:
Waiting:1. findMissingNumbers([1, 3, 5]) should return [2, 4].
Waiting:2. findMissingNumbers([1, 2, 3, 4, 5]) should return [].
Waiting:3. findMissingNumbers([1, 10]) should return [2, 3, 4, 5, 6, 7, 8, 9].
Waiting:4. findMissingNumbers([10, 1, 10, 1, 10, 1]) should return [2, 3, 4, 5, 6, 7, 8, 9].
Waiting:5. findMissingNumbers([3, 1, 4, 1, 5, 9]) should return [2, 6, 7, 8].
Waiting:6. findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]) should return [11].

*/

export function findMissingNumbers(arr) {
  if (arr.length === 0) return [];

  const max = Math.max(...arr);
  const seen = new Set(arr);
  const missing = [];

  for (let i = 1; i <= max; i++) {
    if (!seen.has(i)) missing.push(i);
  }

  return missing;
}
