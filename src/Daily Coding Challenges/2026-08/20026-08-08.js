/**

Bucket Fill 2

Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid the target color.

Each click changes the clicked cell's color and the entire region of connected cells of the same color with the target color.
Cells are connected horizontally and vertically (not diagonally).

Tests:
Waiting:1. bucketFill([["R", "R"], ["R", "R"]], "G") should return 1.
Waiting:2. bucketFill([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]], "B") should return 0.
Waiting:3. bucketFill([["G", "Y", "Y"], ["G", "Y", "G"], ["Y", "Y", "G"]], "R") should return 3.
Waiting:4. bucketFill([["G", "G", "P", "Y"], ["O", "P", "P", "P"], ["O", "O", "P", "G"], ["G", "O", "O", "G"]], "P") should return 5.
Waiting:5. bucketFill([["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]], "Y") should return 12.

*/

function bucketFill(grid, targetColor) {
  const h = grid.length;
  const w = grid[0].length;

  const visited = Array.from({ length: h }, () => Array(w).fill(false));

  function dfs(r, c, color) {
    const stack = [[r, c]];
    visited[r][c] = true;

    while (stack.length) {
      const [x, y] = stack.pop();
      const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      for (const [dx, dy] of dirs) {
        const nx = x + dx,
          ny = y + dy;
        if (
          nx >= 0 &&
          nx < h &&
          ny >= 0 &&
          ny < w &&
          !visited[nx][ny] &&
          grid[nx][ny] === color
        ) {
          visited[nx][ny] = true;
          stack.push([nx, ny]);
        }
      }
    }
  }

  let clicks = 0;

  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (!visited[r][c] && grid[r][c] !== targetColor) {
        clicks++;
        dfs(r, c, grid[r][c]);
      }
    }
  }

  return clicks;
}
