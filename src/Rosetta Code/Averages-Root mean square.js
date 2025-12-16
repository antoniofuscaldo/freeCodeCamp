/**

Averages/Root mean square

https://www.freecodecamp.org/learn/rosetta-code/rosetta-code-challenges/averagesroot-mean-square

 */

function rms(arr) {
  const n = arr.length,
    sumSquares = arr.reduce((acc, val) => acc + val * val, 0);
  return Math.sqrt(sumSquares / n);
}
