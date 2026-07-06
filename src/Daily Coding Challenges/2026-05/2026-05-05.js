/**

Narcissistic Number

Given a positive integer, determine whether it is a narcissistic number.

A number is narcissistic if the sum of each of its digits raised to the power of the total number of digits equals the number itself.
For example, 153 has 3 digits, and 13 + 53 + 33 = 153, so it is narcissistic.

Tests:
Waiting:1. isNarcissistic(153) should return true.
Waiting:2. isNarcissistic(154) should return false.
Waiting:3. isNarcissistic(371) should return true.
Waiting:4. isNarcissistic(512) should return false.
Waiting:5. isNarcissistic(9) should return true.
Waiting:6. isNarcissistic(11) should return false.
Waiting:7. isNarcissistic(9474) should return true.
Waiting:8. isNarcissistic(6549) should return false.

*/

export function isNarcissistic(n) {
  const s = String(n);
  const p = s.length;
  return [...s].reduce((a, c) => a + c ** p, 0) === n;
}
