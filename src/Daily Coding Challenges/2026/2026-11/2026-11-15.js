/**

GCD

Given two positive integers, return their greatest common divisor (GCD).

The GCD of two integers is the largest number that divides evenly into both numbers without leaving a remainder.
For example, the divisors of 4 are 1, 2, and 4. The divisors of 6 are 1, 2, 3, and 6. So given 4 and 6, return 2, the largest number that appears in both sets of divisors.

Tests:
Waiting:1. gcd(4, 6) should return 2.
Waiting:2. gcd(20, 15) should return 5.
Waiting:3. gcd(13, 17) should return 1.
Waiting:4. gcd(654, 456) should return 6.
Waiting:5. gcd(3456, 4320) should return 864.

*/

function gcd(x, y) {
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
}
