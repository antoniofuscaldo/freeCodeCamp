/**

2nd Largest

Given an array, return the second largest distinct number.

*/

function secondLargest(arr) {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique.length >= 2 ? unique[1] : null;
}
