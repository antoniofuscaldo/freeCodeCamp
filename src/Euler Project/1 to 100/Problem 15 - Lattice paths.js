/**

Problem 15: Lattice paths

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

Look at './Assets/freeCodeCamp_Euler_Project_Problem15.gif'

a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner
How many such routes are there through a given gridSize?

*/

function latticePaths(gridSize) {
  function factorial(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const n = BigInt(gridSize),
    numerator = factorial(2n * n),
    denominator = factorial(n) * factorial(n);
  return Number(numerator / denominator);
}

latticePaths(4);
