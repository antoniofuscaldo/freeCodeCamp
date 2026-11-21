/**

LCM
Given two integers, return the least common multiple (LCM) of the two numbers.

The LCM of two numbers is the smallest positive integer that is a multiple of both numbers. For example, given 4 and 6, return 12 because:

Multiples of 4 are 4, 8, 12 and so on.
Multiples of 6 are 6, 12, 18 and so on.
12 is the smallest number that is a multiple of both.
Tests:
Waiting:1. lcm(4, 6) should return 12.
Waiting:2. lcm(9, 6) should return 18.
Waiting:3. lcm(10, 100) should return 100.
Waiting:4. lcm(13, 17) should return 221.
Waiting:5. lcm(45, 70) should return 630.

*/

function lcm(a, b) {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  return (a / gcd(a, b)) * b;
}
