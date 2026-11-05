/**

Array Shift

Given an array and an integer representing how many positions to shift the array, return the shifted array.

A positive integer shifts the array to the left.
A negative integer shifts the array to the right.
The shift wraps around the array.
For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1].

*/

function shiftArray(arr, n) {
  const len = arr.length;
  if (len === 0) return [];

  n %= len;

  if (n > 0) {
    return arr.slice(n).concat(arr.slice(0, n));
  } else if (n < 0) {
    return arr.slice(len + n).concat(arr.slice(0, len + n));
  }

  return arr;
}
