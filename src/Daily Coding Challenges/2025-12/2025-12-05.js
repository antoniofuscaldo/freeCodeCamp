/**

Symmetric Difference

Given two arrays, return a new array containing the symmetric difference of them.

The symmetric difference between two sets is the set of values that appear in either set, but not both.
Return the values in the order they first appear in the input arrays.

*/

function difference(arr1, arr2) {
  const set1 = new Set(arr1),
    set2 = new Set(arr2),
    result = [];
  for (const x of arr1) if (!set2.has(x) && !result.includes(x)) result.push(x);
  for (const y of arr2) if (!set1.has(y) && !result.includes(y)) result.push(y);
  return result;
}
