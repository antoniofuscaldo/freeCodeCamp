/**

Array Diff

Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.

*/

function arrayDiff(arr1, arr2) {
  const set1 = new Set(arr1),
    set2 = new Set(arr2),
    result = [];
  for (const item of set1) {
    if (!set2.has(item)) {
      result.push(item);
    }
  }
  for (const item of set2) {
    if (!set1.has(item)) {
      result.push(item);
    }
  }
  return result.sort();
}
