/**

Narcissistic Number

Given a positive integer, determine whether it is a narcissistic number.

A number is narcissistic if the sum of each of its digits raised to the power of the total number of digits equals the number itself.
For example, 153 has 3 digits, and 13 + 53 + 33 = 153, so it is narcissistic.

*/

function isNarcissistic(n) {
  const s = String(n);
  const p = s.length;
  return [...s].reduce((a, c) => a + c ** p, 0) === n;
}
