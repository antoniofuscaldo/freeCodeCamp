/**

Matrix Rotate

Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:

1	2
3	4
You should return [[3, 1], [4, 2]], which looks like this:

3	1
4	2

Tests:
Waiting:1. rotate([[1]]) should return [[1]].
Waiting:2. rotate([[1, 2], [3, 4]]) should return [[3, 1], [4, 2]].
Waiting:3. rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [[7, 4, 1], [8, 5, 2], [9, 6, 3]].
Waiting:4. rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]) should return [[0, 1, 0], [0, 0, 1], [0, 1, 0]].

*/

export function rotate(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) return [];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: cols }, () => Array(rows));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      result[c][rows - 1 - r] = matrix[r][c];
    }
  }

  return result;
}
