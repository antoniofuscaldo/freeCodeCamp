/**

Pronic Number

Given a number, determine whether it is a pronic number.

A pronic number is the product of two consecutive integers. For example, 6 is pronic because 2 * 3 = 6.

Tests:
Waiting:1. isPronic(6) should return true.
Waiting:2. isPronic(15) should return false.
Waiting:3. isPronic(12) should return true.
Waiting:4. isPronic(132) should return true.
Waiting:5. isPronic(80) should return false.
Waiting:6. isPronic(0) should return true.

*/

export function isPronic(n) {
  if (n < 0) return false;
  const k = Math.floor((Math.sqrt(1 + 4 * n) - 1) / 2);
  return k * (k + 1) === n;
}
