/**

Transposed Matrix

Given a matrix (an array of arrays), return the transposed version of it.

To transpose the matrix, swap the rows and columns. E.g: a value at index [0, 1] should move to index [1, 0].

For example, given:

[
  [1, 2, 3],
  [4, 5, 6]
]
Return:

[
  [1, 4],
  [2, 5],
  [3, 6]
]

*/

function transpose(matrix) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}
