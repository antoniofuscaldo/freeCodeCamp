/**

Checkerboard

Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with "X" and "O" characters of the given size.

The characters should alternate like a checkerboard.
The top-left cell must always be "X".
For example, given [3, 3], return:

[
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"]
]

*/

function createBoard(dimensions) {
  const [rows, cols] = dimensions,
    board = [];

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push((r + c) % 2 === 0 ? 'X' : 'O');
    }
    board.push(row);
  }

  return board;
}
