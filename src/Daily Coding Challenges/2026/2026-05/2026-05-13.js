/**

Offending Element

Given an array of integers that is sorted in ascending order except for one out-of-place element, return the index of that element.

If more than one element could be considered out of place, return the index of the first one.

Tests:
Waiting:1. findOffender([1, 6, 2, 3, 4, 5]) should return 1.
Waiting:2. findOffender([1, 2, 3, 5, 4, 5]) should return 3.
Waiting:3. findOffender([2, 1]) should return 0.
Waiting:4. findOffender([2, 4, 1, 6, 8]) should return 2.
Waiting:5. findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91]) should return 6.

*/

export function findOffender(arr) {
  const isSortedWithout = (skip) => {
    let prev = null;

    for (let i = 0; i < arr.length; i++) {
      if (i === skip) continue;

      if (prev !== null && arr[i] < prev) return false;
      prev = arr[i];
    }

    return true;
  };

  let i = 0;
  while (i < arr.length - 1 && arr[i] <= arr[i + 1]) i++;

  if (i === arr.length - 1) return -1;

  for (const candidate of [i, i + 1]) {
    if (isSortedWithout(candidate)) return candidate;
  }

  return -1;
}
