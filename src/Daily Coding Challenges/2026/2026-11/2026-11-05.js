/**

Matrix Builder

Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:

[
  [0, 0, 0],
  [0, 0, 0]
]

Tests:
Waiting:1. buildMatrix(2, 3) should return [[0, 0, 0], [0, 0, 0]].
Waiting:2. buildMatrix(3, 2) should return [[0, 0], [0, 0], [0, 0]].
Waiting:3. buildMatrix(4, 3) should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]].
Waiting:4. buildMatrix(9, 1) should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]].

*/

export function buildMatrix(rows, cols) {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}
