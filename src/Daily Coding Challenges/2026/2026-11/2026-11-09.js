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

Tests:
Waiting:1. findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat") should return [[0, 1], [2, 1]].
Waiting:2. findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog") should return [[0, 0], [0, 2]].
Waiting:3. findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish") should return [[3, 3], [0, 3]].
Waiting:4. findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox") should return [[1, 3], [1, 1]].

*/

function findWord(matrix, word) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] !== word[0]) continue;

      for (const [dr, dc] of dirs) {
        let found = true;

        for (let i = 1; i < word.length; i++) {
          const nr = r + dr * i;
          const nc = c + dc * i;

          if (matrix[nr]?.[nc] !== word[i]) {
            found = false;
            break;
          }
        }

        if (found) {
          return [
            [r, c],
            [r + dr * (word.length - 1), c + dc * (word.length - 1)],
          ];
        }
      }
    }
  }
}
