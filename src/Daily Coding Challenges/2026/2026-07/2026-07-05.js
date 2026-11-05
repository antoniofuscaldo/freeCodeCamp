/**

Bucket Fill

Given a 2D grid, a starting position ([row, col]), and a new value, replace the value at the starting position and all connected cells of the same value with the new value.

Cells are connected if they are adjacent horizontally or vertically (not diagonally).
Return the updated grid.

Tests:
Waiting:1. bucketFill([["R", "G"], ["R", "G"]], [0, 1], "B") should return [["R", "B"], ["R", "B"]].
Waiting:2. bucketFill([["Y", "G", "G"], ["Y", "Y", "Y"], ["B", "Y", "R"]], [1, 2], "B") should return [["B", "G", "G"], ["B", "B", "B"], ["B", "B", "R"]].
Waiting:3. bucketFill([["O", "O", "P"], ["P", "O", "O"], ["P", "P", "O"]], [2, 0], "R") should return [["O", "O", "P"], ["R", "O", "O"], ["R", "R", "O"]].
Waiting:4. bucketFill([["T", "T", "R", "T"], ["R", "T", "R", "T"], ["R", "T", "R", "T"], ["T", "T", "T", "T"]], [0, 3], "Y") should return [["Y", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["Y", "Y", "Y", "Y"]].
Waiting:5. bucketFill([["G", "B", "G", "B"], ["R", "B", "B", "G"], ["B", "G", "B", "R"], ["B", "G", "G", "B"]], [2, 2], "G") should return [["G", "G", "G", "B"], ["R", "G", "G", "G"], ["B", "G", "G", "R"], ["B", "G", "G", "B"]].

*/

export function bucketFill(grid, [row, col], newValue) {
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
