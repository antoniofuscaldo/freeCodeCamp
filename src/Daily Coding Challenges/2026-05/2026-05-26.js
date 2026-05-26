/**

Sum of Differences

Given an array of numbers, return the sum of the differences between each number and the one that follows it.

For example, given [1, 3, 4], return 3 (2 + 1).

*/

function sumOfDifferences(arr) {
  let s = 0;
  for (let i = 0; i < arr.length - 1; i++) s += arr[i + 1] - arr[i];
  return s;
}
