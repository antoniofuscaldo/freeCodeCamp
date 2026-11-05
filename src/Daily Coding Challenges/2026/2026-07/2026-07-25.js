/**

Cell Signal

Given a grid containing three cell tower readings, determine the location of the phone.

Each cell in the grid is either 0 (no tower) or a positive integer representing the number of cells to the phone, measured in a straight line: horizontal, vertical, or diagonal.
Return the [row, col] of the cell that is the correct number of cells from all three towers.
There is always exactly one solution.

Tests:
Waiting:1. findSignal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]) should return [1, 2].
Waiting:2. findSignal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]) should return [2, 1].
Waiting:3. findSignal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]) should return [2, 2].
Waiting:4. findSignal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]) should return [3, 4].
Waiting:5. findSignal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]) should return [3, 3].

*/

export function findSignal(grid) {
  const towers = [];
  const rows = grid.length;
  const cols = grid[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] > 0) towers.push({ r, c, d: grid[r][c] });
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let ok = true;
      for (const t of towers) {
        const dist = Math.max(Math.abs(r - t.r), Math.abs(c - t.c));
        if (dist !== t.d) {
          ok = false;
          break;
        }
      }
      if (ok) return [r, c];
    }
  }

  return null;
}
