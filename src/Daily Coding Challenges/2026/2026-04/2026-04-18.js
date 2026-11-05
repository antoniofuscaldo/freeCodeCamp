/**

Array Sum Finder

Given an array of numbers and a target number, return the first subset of two or more numbers that adds up to the target.

The "first" subset is the one whose elements have the lowest possible indices, prioritizing the earliest index first.
Each number in the array may only be used once.
If no valid subset exists, return "Sum not found".
Return the matching numbers as an array in the order they appear in the original array.

*/

function findSum(arr, target) {
  const n = arr.length;

  function search(start, current, sum) {
    if (current.length >= 2 && sum === target) return current;

    for (let i = start; i < n; i++) {
      const r = search(i + 1, [...current, arr[i]], sum + arr[i]);
      if (r) return r;
    }

    return null;
  }

  for (let i = 0; i < n; i++) {
    const r = search(i + 1, [arr[i]], arr[i]);
    if (r) return r;
  }

  return 'Sum not found';
}
