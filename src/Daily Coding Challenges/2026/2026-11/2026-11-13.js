/**

Array Shift

Given an array and an integer representing how many positions to shift the array, return the shifted array.

A positive integer shifts the array to the left.
A negative integer shifts the array to the right.
The shift wraps around the array.
For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1].

Tests:
Waiting:1. shiftArray([1, 2, 3], 1) should return [2, 3, 1].
Waiting:2. shiftArray([1, 2, 3], -1) should return [3, 1, 2].
Waiting:3. shiftArray(["alpha", "bravo", "charlie"], 5) should return ["charlie", "alpha", "bravo"].
Waiting:4. shiftArray(["alpha", "bravo", "charlie"], -11) should return ["bravo", "charlie", "alpha"].
Waiting:5. shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15) should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4].

*/

export function shiftArray(arr, n) {
  const len = arr.length;
  if (len === 0) return arr;
  const k = ((n % len) + len) % len;
  return arr.slice(k).concat(arr.slice(0, k));
}
