/**

Inverted Matrix

Given a matrix (an array of arrays) filled with two distinct values, return a new matrix where all occurrences of one value are swapped with the other.

For example, given:

[
  ["a", "b"],
  ["a", "a"]
]
Return:

[
  ["b", "a"],
  ["b", "b"]
]

*/

function invertMatrix(matrix) {
  const a = matrix[0][0];
  const b = matrix[0][1] === a ? matrix[1][0] : matrix[0][1];

  return matrix.map((row) => row.map((v) => (v === a ? b : a)));
}
