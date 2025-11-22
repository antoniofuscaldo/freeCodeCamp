/**

Word Search

Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.

The given matrix will be filled with all lowercase letters (a-z).
The word to find will always be in the matrix exactly once.
The word to find will always be in a straight line in one of these directions:
left to right
right to left
top to bottom
bottom to top
For example, given the matrix:

[
  ["a", "c", "t"],
  ["t", "a", "t"],
  ["c", "t", "c"]
]
And the word "cat", return:

[[0, 1], [2, 1]]
Where [0, 1] are the indices for the "c" (start of the word), and [2, 1] are the indices for the "t" (end of the word).

*/

function findWord(matrix, word) {
  const rows = matrix.length,
    cols = matrix[0].length,
    len = word.length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols - len; c++) {
      let match = true;
      for (let k = 0; k < len; k++) {
        if (matrix[r][c + k] !== word[k]) {
          match = false;
          break;
        }
      }
      if (match)
        return [
          [r, c],
          [r, c + len - 1],
        ];
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = len - 1; c < cols; c++) {
      let match = true;
      for (let k = 0; k < len; k++) {
        if (matrix[r][c - k] !== word[k]) {
          match = false;
          break;
        }
      }
      if (match)
        return [
          [r, c],
          [r, c - len + 1],
        ];
    }
  }

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r <= rows - len; r++) {
      let match = true;
      for (let k = 0; k < len; k++) {
        if (matrix[r + k][c] !== word[k]) {
          match = false;
          break;
        }
      }
      if (match)
        return [
          [r, c],
          [r + len - 1, c],
        ];
    }
  }

  for (let c = 0; c < cols; c++) {
    for (let r = len - 1; r < rows; r++) {
      let match = true;
      for (let k = 0; k < len; k++) {
        if (matrix[r - k][c] !== word[k]) {
          match = false;
          break;
        }
      }
      if (match)
        return [
          [r, c],
          [r - len + 1, c],
        ];
    }
  }

  return null;
}
