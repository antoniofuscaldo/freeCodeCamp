/**

Pascal's Triangle Row

Given an integer n, return the nth row of Pascal's triangle as an array.

In Pascal's Triangle, each row begins and ends with 1, and each interior value is the sum of the two values directly above it.

Here's the first 5 rows of the triangle:

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

*/

function pascalRow(n) {
  const r = [];
  let v = 1;
  for (let k = 0; k < n; k++) {
    r.push(v);
    v = (v * (n - 1 - k)) / (k + 1);
  }
  return r;
}
