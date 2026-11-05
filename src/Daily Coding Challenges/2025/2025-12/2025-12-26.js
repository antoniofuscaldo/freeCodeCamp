/**

 Sum of Divisors

 Given a positive integer, return the sum of all its divisors.

 A divisor is any integer that divides the number evenly (the remainder is 0).
 Only count each divisor once.
 For example, given 6, return 12 because the divisors of 6 are 1, 2, 3, and 6, and the sum of those is 12.

 */

function sumDivisors(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum;
}
