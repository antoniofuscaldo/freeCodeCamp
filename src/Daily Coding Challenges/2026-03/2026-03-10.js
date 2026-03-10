/**

Array Insertion

Given an array, a value to insert into the array, and an index to insert the value at, return a new array with the value inserted at the specified index.

*/

function insertIntoArray(arr, value, index) {
  return arr.toSpliced(index, 0, value);
}
