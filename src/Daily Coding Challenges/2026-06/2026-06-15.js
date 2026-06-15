/**

Number Sort

Given a string of numbers separated by commas, return an array of the numbers sorted from smallest to largest.

*/

function sortNumbers(str) {
  return str
    .split(',')
    .map(Number)
    .sort((a, b) => a - b);
}
