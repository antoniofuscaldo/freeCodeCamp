/**

Offending Element

Given an array of integers that is sorted in ascending order except for one out-of-place element, return the index of that element.

If more than one element could be considered out of place, return the index of the first one.

*/

function findOffender(arr) {
  const isSortedWithout = (skip) => {
    let prev = null;

    for (let i = 0; i < arr.length; i++) {
      if (i === skip) continue;

      if (prev !== null && arr[i] < prev) return false;
      prev = arr[i];
    }

    return true;
  };

  let i = 0;
  while (i < arr.length - 1 && arr[i] <= arr[i + 1]) i++;

  if (i === arr.length - 1) return -1;

  for (const candidate of [i, i + 1]) {
    if (isSortedWithout(candidate)) return candidate;
  }

  return -1;
}
