/**

Problem 7: 10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?

*/

function nthPrime(n) {
  function isPrime(x) {
    if (x < 2) return false;
    if (x === 2) return true;
    if (x % 2 === 0) return false;
    for (let i = 3; i * i <= x; i += 2) {
      if (x % i === 0) return false;
    }
    return true;
  }
  let count = 0,
    num = 1;
  while (count < n) {
    num++;
    if (isPrime(num)) count++;
  }
  return num;
}

nthPrime(10001);
