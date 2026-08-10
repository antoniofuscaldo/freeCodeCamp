/**

The Last Challenge: Bucket Fill 3

Today marks a year of daily coding challenges. This is the last new one for now. Good luck!

Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid that color.

Each click changes the clicked cell's color and the entire region of connected cells of the same color (4-directional).
Clicks can use any color as an intermediate step, not just the target color.

Tests:
Waiting:1. bucketFill([["B", "B"], ["B", "B"]], "R") should return 1.
Waiting:2. bucketFill([["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]], "G") should return 0.
Waiting:3. bucketFill([["P", "P", "Y"], ["Y", "P", "Y"], ["Y", "P", "P"]], "O") should return 2.
Waiting:4. bucketFill([["G", "Y", "C", "C"], ["Y", "Y", "Y", "B"], ["C", "Y", "B", "B"], ["C", "B", "B", "C"]], "R") should return 4.
Waiting:5. bucketFill([["G", "G", "O", "O"], ["G", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["G", "G", "G", "G"]], "P") should return 5.
Waiting:6. bucketFill([["R", "G", "R", "G"], ["R", "G", "R", "G"], ["B", "B", "B", "B"], ["B", "B", "B", "B"], ["R", "G", "R", "G"]], "Y") should return 3.

*/

export function bucketFill(grid, targetColor) {
  const rows = grid.length;
  const cols = grid[0].length;

  const regionId = Array.from({ length: rows }, () => Array(cols).fill(-1));

  const colors = [];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let regionCount = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (regionId[r][c] !== -1) continue;

      const color = grid[r][c];
      const queue = [[r, c]];
      regionId[r][c] = regionCount;

      for (let i = 0; i < queue.length; i++) {
        const [cr, cc] = queue[i];

        for (const [dr, dc] of directions) {
          const nr = cr + dr;
          const nc = cc + dc;

          if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            regionId[nr][nc] === -1 &&
            grid[nr][nc] === color
          ) {
            regionId[nr][nc] = regionCount;
            queue.push([nr, nc]);
          }
        }
      }

      colors.push(color);
      regionCount++;
    }
  }

  if (regionCount === 1) {
    return colors[0] === targetColor ? 0 : 1;
  }

  const graph = Array.from({ length: regionCount }, () => new Set());

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const a = regionId[r][c];

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
          continue;
        }

        const b = regionId[nr][nc];

        if (a !== b) {
          graph[a].add(b);
        }
      }
    }
  }

  const allMask = (1 << regionCount) - 1;

  const queue = [];
  const visited = new Set();

  for (let start = 0; start < regionCount; start++) {
    const mask = 1 << start;
    const state = `${mask},${colors[start]}`;

    queue.push({
      mask,
      color: colors[start],
      clicks: 0,
    });

    visited.add(state);
  }

  while (queue.length > 0) {
    const { mask, color, clicks } = queue.shift();

    if (mask === allMask) {
      return color === targetColor ? clicks : clicks + 1;
    }

    const candidateColors = new Set();

    for (let i = 0; i < regionCount; i++) {
      if ((mask & (1 << i)) === 0) {
        for (const neighbor of graph[i]) {
          if (mask & (1 << neighbor)) {
            candidateColors.add(colors[i]);
            break;
          }
        }
      }
    }

    for (const nextColor of candidateColors) {
      if (nextColor === color) continue;

      let newMask = mask;
      const stack = [];

      for (let i = 0; i < regionCount; i++) {
        if ((mask & (1 << i)) === 0 && colors[i] === nextColor) {
          for (const neighbor of graph[i]) {
            if (mask & (1 << neighbor)) {
              stack.push(i);
              break;
            }
          }
        }
      }

      const added = new Set(stack);

      while (stack.length > 0) {
        const current = stack.pop();

        newMask |= 1 << current;

        for (const neighbor of graph[current]) {
          if (
            (newMask & (1 << neighbor)) === 0 &&
            colors[neighbor] === nextColor &&
            !added.has(neighbor)
          ) {
            added.add(neighbor);
            stack.push(neighbor);
          }
        }
      }

      if (newMask === mask) continue;

      const state = `${newMask},${nextColor}`;

      if (!visited.has(state)) {
        visited.add(state);

        queue.push({
          mask: newMask,
          color: nextColor,
          clicks: clicks + 1,
        });
      }
    }
  }

  return -1;
}
