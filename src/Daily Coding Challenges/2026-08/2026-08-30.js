/**

Array Duplicates

Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

Only include one instance of each value in the returned array.

Tests:
Waiting:1. findDuplicates([1, 2, 3, 4, 5]) should return [].
Waiting:2. findDuplicates([1, 2, 3, 4, 1, 2]) should return [1, 2].
Waiting:3. findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]) should return [-6, 0, 2, 4, 5, 23].

*/

export function findDuplicates(arr) {
  const counts = new Map();
  for (const v of arr) counts.set(v, (counts.get(v) || 0) + 1);

  const duplicates = [];
  for (const [value, cnt] of counts) {
    if (cnt > 1) duplicates.push(value);
  }

  return duplicates.sort((a, b) => a - b);
}
