/**

Perfect Square

Given an integer, determine if it is a perfect square.

A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.

 */

function isPerfectSquare(n) {
  if (n < 0) return false;
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt);
}
