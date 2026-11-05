/**

Nth Prime

A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.

*/

function nthPrime(n) {
  let count = 0,
    num = 1;
  while (count < n) {
    num++;
    let prime = true;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    if (prime) count++;
  }
  return num;
}
