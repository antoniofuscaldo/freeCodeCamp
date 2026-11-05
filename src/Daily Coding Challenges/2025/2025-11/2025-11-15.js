/**

GCD

Given two positive integers, return their greatest common divisor (GCD).

The GCD of two integers is the largest number that divides evenly into both numbers without leaving a remainder.
For example, the divisors of 4 are 1, 2, and 4. The divisors of 6 are 1, 2, 3, and 6. So given 4 and 6, return 2, the largest number that appears in both sets of divisors.

*/

function gcd(x, y) {
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}
