/**

Sequential Difference

Given an array of numbers, return a new array containing the value needed to get from each number to the next number.

For the last number, use 0 since there is no next number.
For example, given [1, 2, 4, 7], return [1, 2, 3, 0].

*/

function findDifferences(arr) {
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    out.push(i < arr.length - 1 ? arr[i + 1] - arr[i] : 0);
  }
  return out;
}
