/**

Array Diff

Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.

*/

function arrayDiff(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let result = [];
  for (let item of set1) {
    if (!set2.has(item)) {
      result.push(item);
    }
  }
  for (let item of set2) {
    if (!set1.has(item)) {
      result.push(item);
    }
  }
  return result.sort();
}
