/**

Matrix Rotate

Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:

1	2
3	4

You should return [[3, 1], [4, 2]], which looks like this:

3	1
4	2

*/

function rotate(matrix) {
  const n = matrix.length,
    result = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }
  return result;
}
