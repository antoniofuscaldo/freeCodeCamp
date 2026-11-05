/**

Array Sum

Given an array of numbers, return the sum of all the numbers.

*/

function sumArray(n) {
  return n.reduce((a, b) => a + b, 0);
}
