/**

Problem 10: Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.

*/

function primeSummation(n) {
  if (n <= 2) return 0;
  let isPrime = new Array(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) sum += i;
  }
  return sum;
}

primeSummation(2000000);
