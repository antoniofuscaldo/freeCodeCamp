/**

2nd Largest

Given an array, return the second largest distinct number.

Tests:
Waiting:1. secondLargest([1, 2, 3, 4]) should return 3.
Waiting:2. secondLargest([20, 139, 94, 67, 31]) should return 94.
Waiting:3. secondLargest([2, 3, 4, 6, 6]) should return 4.
Waiting:4. secondLargest([10, -17, 55.5, 44, 91, 0]) should return 55.5.
Waiting:5. secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]) should return 0.

*/

export function secondLargest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a)[1];
}
