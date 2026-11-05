/**

Sum of Differences

Given an array of numbers, return the sum of the differences between each number and the one that follows it.

For example, given [1, 3, 4], return 3 (2 + 1).

Tests:
Waiting:1. sumOfDifferences([1, 3, 4]) should return 3.
Waiting:2. sumOfDifferences([5, -3, 3, 9, 10]) should return 5.
Waiting:3. sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7]) should return -16.
Waiting:4. sumOfDifferences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75]) should return 25.

*/

export function sumOfDifferences(arr) {
  let s = 0;
  for (let i = 0; i < arr.length - 1; i++) s += arr[i + 1] - arr[i];
  return s;
}
