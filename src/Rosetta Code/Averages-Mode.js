/**

Averages/Mode

Write a function mode to find the value that appears most in an array.

The case where the collection is empty may be ignored. Care must be taken to handle the case where the mode is non-unique.

If it is not appropriate or possible to support a general collection, use a vector (array), if possible. If it is not appropriate or possible to support an unspecified value type, use integers.

*/

function mode(arr) {
  const counts = new Map();
  for (const num of arr) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }
  let maxCount = 0;
  for (const c of counts.values()) {
    if (c > maxCount) maxCount = c;
  }
  const modes = [];
  for (const [num, c] of counts.entries()) {
    if (c === maxCount) modes.push(num);
  }
  return modes;
}
