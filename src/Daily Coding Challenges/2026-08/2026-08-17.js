/**

Targeted Sum

Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

The returned array should have the indices in ascending order.

Tests:
Waiting:1. findTarget([2, 7, 11, 15], 9) should return [0, 1].
Waiting:2. findTarget([3, 2, 4, 5], 6) should return [1, 2].
Waiting:3. findTarget([1, 3, 5, 6, 7, 8], 15) should return [4, 5].
Waiting:4. findTarget([1, 3, 5, 7], 14) should return "Target not found".

*/

export function findTarget(arr, target) {
  const idxMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const need = target - val;

    if (idxMap.has(need)) {
      const j = idxMap.get(need);
      return j < i ? [j, i] : [i, j];
    }

    if (!idxMap.has(val)) idxMap.set(val, i);
  }

  return 'Target not found';
}
