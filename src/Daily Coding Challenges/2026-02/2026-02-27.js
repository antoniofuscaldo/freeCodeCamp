/**

Matrix Shift

Given a matrix (array of arrays) of numbers and an integer, shift all values in the matrix by the given amount.

A positive shift moves values to the right.
A negative shift moves values to the left.
Values should wrap:

Treat the matrix as one continuous sequence of values.
When a value moves past the end of a row, it continues at the beginning of the next row.
When a value moves past the last position in the matrix, it wraps to the first position.
The same applies in reverse when shifting left.
For example, given:

[
  [1, 2, 3],
  [4, 5, 6]
]
with a shift of 1, move all the numbers to the right one:

[
  [6, 1, 2],
  [3, 4, 5]
]

*/

function shiftMatrix(matrix, shift) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const n = rows * cols;

  const flat = matrix.flat();
  const out = new Array(n);

  const s = ((shift % n) + n) % n;

  for (let i = 0; i < n; i++) {
    out[(i + s) % n] = flat[i];
  }

  const res = [];
  for (let r = 0; r < rows; r++) {
    res.push(out.slice(r * cols, r * cols + cols));
  }

  return res;
}
