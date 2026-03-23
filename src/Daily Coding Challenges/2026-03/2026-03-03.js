/**

Perfect Cube Count

Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.

The lower number is not garanteed to be the first argument.
A number is a perfect cube if there exists an integer (n) where n * n * n = number. For example, 27 is a perfect cube because 3 * 3 * 3 = 27.

*/

function countPerfectCubes(a, b) {
  const lo = Math.min(a, b),
    hi = Math.max(a, b);
  let c = 0;

  for (let n = Math.cbrt(lo) | 0; n * n * n <= hi; n++) {
    if (n * n * n >= lo) c++;
  }

  return c;
}
