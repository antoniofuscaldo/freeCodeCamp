/**

Sorted Array Swap

Given an array of integers, return a new array using the following rules:

Sort the integers in ascending order
Then swap all values whose index is a multiple of 3 with the value before it.

*/

function sortAndSwap(arr) {
  const a = [...arr].sort((x, y) => x - y);
  for (let i = 0; i < a.length; i++) {
    if (i % 3 === 0 && i > 0) {
      const t = a[i];
      a[i] = a[i - 1];
      a[i - 1] = t;
    }
  }
  return a;
}
