/**

Space Week Day 4: Landing Spot

In day four of Space Week, you are given a matrix of numbers (an array of arrays), representing potential landing spots for your rover. Find the safest landing spot based on the following rules:

Each spot in the matrix will contain a number from 0-9, inclusive.
Any 0 represents a potential landing spot.
Any number other than 0 is too dangerous to land. The higher the number, the more dangerous.
The safest spot is defined as the 0 cell whose surrounding cells (up to 4 neighbors, ignore diagonals) have the lowest total danger.
Ignore out-of-bounds neighbors (corners and edges just have fewer neighbors).
Return the indices of the safest landing spot. There will always only be one safest spot.
For instance, given:

[
  [1, 0],
  [2, 0]
]
Return [0, 1], the indices for the 0 in the first array.

Tests:
Waiting:1. findLandingSpot([[1, 0], [2, 0]]) should return [0, 1].
Waiting:2. findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]) should return [1, 1].
Waiting:3. findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]) should return [2, 2].
Waiting:4. findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]) should return [2, 1].

*/

export function findLandingSpot(matrix) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let best = [0, 0],
    min = Infinity;

  matrix.forEach((row, r) =>
    row.forEach((value, c) => {
      if (value !== 0) return;

      let danger = 0;
      for (const [dr, dc] of dirs) {
        const nr = r + dr,
          nc = c + dc;
        if (matrix[nr]?.[nc] !== undefined) danger += matrix[nr][nc];
      }

      if (danger < min) {
        min = danger;
        best = [r, c];
      }
    }),
  );

  return best;
}
