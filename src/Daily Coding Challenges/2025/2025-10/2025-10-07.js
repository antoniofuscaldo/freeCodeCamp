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

*/

function findLandingSpot(matrix) {
  let best = null,
    minDanger = Infinity,
    rows = matrix.length,
    cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        let danger = 0;
        if (i > 0) danger += matrix[i - 1][j];
        if (i < rows - 1) danger += matrix[i + 1][j];
        if (j > 0) danger += matrix[i][j - 1];
        if (j < cols - 1) danger += matrix[i][j + 1];

        if (danger < minDanger) {
          minDanger = danger;
          best = [i, j];
        }
      }
    }
  }
  return best;
}
