/** 

Sorted Array?

Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

If the given array is:

In ascending order (lowest to highest), return "Ascending".
In descending order (highest to lowest), return "Descending".
Not sorted in ascending or descending order, return "Not sorted".

*/

function isSorted(arr) {
  let ascending = true,
    descending = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) ascending = false;
    if (arr[i] > arr[i - 1]) descending = false;
  }

  if (ascending) return 'Ascending';
  if (descending) return 'Descending';
  return 'Not sorted';
}
