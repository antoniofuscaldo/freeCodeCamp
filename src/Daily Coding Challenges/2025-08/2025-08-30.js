/**

Array Duplicates

Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

Only include one instance of each value in the returned array.

*/

function findDuplicates(arr) {
  let counts = new Map();
  let duplicates = new Set();
  for (let num of arr) {
    if (counts.has(num)) {
      duplicates.add(num);
    } else {
      counts.set(num, 1);
    }
  }
  return Array.from(duplicates).sort((a, b) => a - b);
}
