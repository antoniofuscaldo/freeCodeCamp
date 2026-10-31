/**

Nth Prime

A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.

Tests:
Waiting:1. nthPrime(5) should return 11.
Waiting:2. nthPrime(10) should return 29.
Waiting:3. nthPrime(16) should return 53.
Waiting:4. nthPrime(99) should return 523.
Waiting:5. nthPrime(1000) should return 7919.

*/

function nthPrime(n) {
  const limit =
    n < 6 ? 15 : Math.ceil(n * (Math.log(n) + Math.log(Math.log(n))) + 10);
  const sieve = new Uint8Array(limit + 1).fill(1);
  sieve[0] = sieve[1] = 0;

  for (let i = 2; i * i <= limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) sieve[j] = 0;
    }
  }

  let count = 0;
  for (let i = 2; i <= limit; i++) {
    if (sieve[i] && ++count === n) return i;
  }
}
