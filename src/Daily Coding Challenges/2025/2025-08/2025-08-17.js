/**

Targeted Sum

Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

The returned array should have the indices in ascending order.

*/

function findTarget(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      const j = map.get(complement);
      return [Math.min(i, j), Math.max(i, j)];
    }
    map.set(arr[i], i);
  }
  return 'Target not found';
}
