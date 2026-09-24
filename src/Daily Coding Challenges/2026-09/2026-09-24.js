/**

Perfect Square

Given an integer, determine if it is a perfect square.

A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.

Tests:
Waiting:1. isPerfectSquare(9) should return true.
Waiting:2. isPerfectSquare(49) should return true.
Waiting:3. isPerfectSquare(1) should return true.
Waiting:4. isPerfectSquare(2) should return false.
Waiting:5. isPerfectSquare(99) should return false.
Waiting:6. isPerfectSquare(-9) should return false.
Waiting:7. isPerfectSquare(0) should return true.
Waiting:8. isPerfectSquare(25281) should return true.

*/

export function isPerfectSquare(n) {
  if (n < 0) return false;
  const r = Math.sqrt(n);
  return Number.isInteger(r);
}
