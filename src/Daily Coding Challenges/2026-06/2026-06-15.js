/**

Number Sort

Given a string of numbers separated by commas, return an array of the numbers sorted from smallest to largest.

Tests:
Waiting:1. sortNumbers("3,1,2") should return [1, 2, 3].
Waiting:2. sortNumbers("5,3,8,1,9,2") should return [1, 2, 3, 5, 8, 9].
Waiting:3. sortNumbers("12,61,49,80,19,50,77,38") should return [12, 19, 38, 49, 50, 61, 77, 80].
Waiting:4. sortNumbers("0,6,-19,44,-2,7,0") should return [-19, -2, 0, 0, 6, 7, 44].

*/

export function sortNumbers(str) {
  return str
    .split(',')
    .map(Number)
    .sort((a, b) => a - b);
}
