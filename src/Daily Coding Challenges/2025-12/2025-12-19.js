/**

Pairwise

Given an array of integers and a target number, find all pairs of elements in the array whose values add up to the target and return the sum of their indices.

For example, given [2, 3, 4, 6, 8] and 10, you will find two valid pairs:

2 and 8 (2 + 8 = 10), whose indices are 0 and 4
4 and 6 (4 + 6 = 10), whose indices are 2 and 3
Add all the indices together to get a return value of 9.

*/

function pairwise(arr, target) {
  let sum = 0,
    used = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (used.has(i)) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (used.has(j)) continue;

      if (arr[i] + arr[j] === target) {
        sum += i + j;
        used.add(i);
        used.add(j);
        break;
      }
    }
  }
  return sum;
}
