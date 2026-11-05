/**

Array Diff

Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.

Tests:
Waiting:1. arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]) should return ["cherry"].
Waiting:2. arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]) should return ["cherry"].
Waiting:3. arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]) should return ["eight", "four", "six", "two"].
Waiting:4. arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) should return ["five", "one", "seven", "three"].
Waiting:5. arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]) should return ["freeCodeCamp", "rocks"].

*/

export function arrayDiff(arr1, arr2) {
  const s1 = new Set(arr1);
  const s2 = new Set(arr2);
  const result = [];

  for (const v of s1) if (!s2.has(v)) result.push(v);
  for (const v of s2) if (!s1.has(v)) result.push(v);

  return result.sort((a, b) => a.localeCompare(b));
}
