/**

Connect 3

Given a matrix of strings representing pieces on a game grid, determine if any player has three in a row.

Each cell contains "R", "Y", or "" (empty string).
Three in a row means three consecutive non-empty cells of the same type horizontally, vertically, or diagonally.
Return:

A flat array with the winner and the coordinates of their three winning cells in the format: ["R", [0,2], [1,3], [2,4]]. Coordinates are returned top-to-bottom, then left-to-right.
An empty array if there is no winner.

*/

function connectThree(matrix) {
  const h = matrix.length,
    w = matrix[0].length;

  const win = (p, a) => [p, a[0], a[1], a[2]];

  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      const p = matrix[r][c];
      if (!p) continue;

      if (c + 2 < w && matrix[r][c + 1] === p && matrix[r][c + 2] === p)
        return win(p, [
          [r, c],
          [r, c + 1],
          [r, c + 2],
        ]);

      if (r + 2 < h && matrix[r + 1][c] === p && matrix[r + 2][c] === p)
        return win(p, [
          [r, c],
          [r + 1, c],
          [r + 2, c],
        ]);

      if (
        r + 2 < h &&
        c + 2 < w &&
        matrix[r + 1][c + 1] === p &&
        matrix[r + 2][c + 2] === p
      )
        return win(p, [
          [r, c],
          [r + 1, c + 1],
          [r + 2, c + 2],
        ]);

      if (
        r + 2 < h &&
        c - 2 >= 0 &&
        matrix[r + 1][c - 1] === p &&
        matrix[r + 2][c - 2] === p
      )
        return win(p, [
          [r, c],
          [r + 1, c - 1],
          [r + 2, c - 2],
        ]);
    }
  }

  return [];
}
