/**

Magic Square Solver

Given a 3x3 grid with one missing number (represented as 0), return the missing number that completes the magic square, or "impossible" if no valid number exists.

A magic square is a grid where every row, column, and diagonal adds up to the same number.

Tests:
Waiting:1. solveMagicSquare([[2, 7, 6], [9, 0, 1], [4, 3, 8]]) should return 5.
Waiting:2. solveMagicSquare([[0, 14, 12], [18, 10, 2], [8, 6, 16]]) should return 4.
Waiting:3. solveMagicSquare([[12, 17, 16], [19, 0, 10], [14, 13, 18]]) should return "impossible".
Waiting:4. solveMagicSquare([[15, 35, 31], [43, 27, 11], [23, 19, 0]]) should return 39.
Waiting:5. solveMagicSquare([[26, 41, 14], [47, 35, 0], [32, 29, 44]]) should return "impossible".

*/

export function solveMagicSquare(grid) {
  let zeroR = -1,
    zeroC = -1;
  const rows = 3,
    cols = 3;
  let S_known = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) {
        zeroR = r;
        zeroC = c;
      } else S_known += grid[r][c];
    }
  }

  if (zeroR === -1) return 'impossible'; // no missing cell

  const sumRow = (r) => grid[r][0] + grid[r][1] + grid[r][2];
  const sumCol = (c) => grid[0][c] + grid[1][c] + grid[2][c];
  const sumDiag1 = () => grid[0][0] + grid[1][1] + grid[2][2];
  const sumDiag2 = () => grid[0][2] + grid[1][1] + grid[2][0];

  const rowHasZero = (r) => grid[r].includes(0);
  const colHasZero = (c) =>
    grid[0][c] === 0 || grid[1][c] === 0 || grid[2][c] === 0;
  const diag1HasZero = () =>
    grid[0][0] === 0 || grid[1][1] === 0 || grid[2][2] === 0;
  const diag2HasZero = () =>
    grid[0][2] === 0 || grid[1][1] === 0 || grid[2][0] === 0;

  let M = null;
  for (let r = 0; r < 3; r++) {
    if (!rowHasZero(r)) {
      M = sumRow(r);
      break;
    }
  }
  if (M === null) {
    for (let c = 0; c < 3; c++) {
      if (!colHasZero(c)) {
        M = sumCol(c);
        break;
      }
    }
  }
  if (M === null && !diag1HasZero()) M = sumDiag1();
  if (M === null && !diag2HasZero()) M = sumDiag2();

  let x;
  if (M !== null) {
    const rowSumKnown = sumRow(zeroR);
    x = M - rowSumKnown;
  } else {
    const rowSumKnown = sumRow(zeroR);
    const numerator = S_known - 3 * rowSumKnown;
    if (numerator % 2 !== 0) return 'impossible';
    x = numerator / 2;
    M = rowSumKnown + x;
  }

  if (!Number.isFinite(x) || Math.round(x) !== x) return 'impossible';
  x = Math.round(x);

  const g = grid.map((r) => r.slice());
  g[zeroR][zeroC] = x;

  const allEqual = (vals) => vals.every((v) => v === vals[0]);
  const rSums = [sumRow(0), sumRow(1), sumRow(2)].map((s, i) => {
    // if row contained zero, recompute from g
    if (rowHasZero(i)) return g[i][0] + g[i][1] + g[i][2];
    return s;
  });
  const cSums = [sumCol(0), sumCol(1), sumCol(2)].map((s, i) => {
    if (colHasZero(i)) return g[0][i] + g[1][i] + g[2][i];
    return s;
  });
  const d1 = diag1HasZero() ? g[0][0] + g[1][1] + g[2][2] : sumDiag1();
  const d2 = diag2HasZero() ? g[0][2] + g[1][1] + g[2][0] : sumDiag2();

  const allSums = [...rSums, ...cSums, d1, d2];

  if (!allEqual(allSums)) return 'impossible';

  const common = allSums[0];
  if (M === null) M = common;
  if (common !== M) return 'impossible';

  return x;
}
