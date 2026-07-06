/**

Bucket Fill

Given a 2D grid, a starting position ([row, col]), and a new value, replace the value at the starting position and all connected cells of the same value with the new value.

Cells are connected if they are adjacent horizontally or vertically (not diagonally).
Return the updated grid.

*/

function bucketFill(grid, [row, col], newValue) {
  const h = grid.length;
  if (h === 0) return grid;
  const w = grid[0].length;
  const old = grid[row][col];
  if (old === newValue) return grid;
  const stack = [[row, col]];
  while (stack.length) {
    const [r, c] = stack.pop();
    if (r < 0 || r >= h || c < 0 || c >= w) continue;
    if (grid[r][c] !== old) continue;
    grid[r][c] = newValue;
    stack.push([r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]);
  }
  return grid;
}
