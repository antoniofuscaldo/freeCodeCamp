/**

Flattened

Given an array, determine if it is flat.

An array is flat if none of its elements are arrays.

*/

function isFlat(arr) {
  return !arr.some(Array.isArray);
}
