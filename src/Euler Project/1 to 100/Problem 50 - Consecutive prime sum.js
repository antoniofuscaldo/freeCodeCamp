/**

Problem 50: Consecutive prime sum

The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?

*/

function consecutivePrimeSum(limit) {
  function isPrime(n) {
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let primes = [];

  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) primes.push(i);
  }

  let prefix = [0];

  for (let p of primes) {
    prefix.push(prefix[prefix.length - 1] + p);
  }

  let maxLen = 0;
  let result = 0;

  for (let i = 0; i < prefix.length; i++) {
    for (let j = i - (maxLen + 1); j >= 0; j--) {
      let sum = prefix[i] - prefix[j];
      if (sum >= limit) break;
      if (isPrime(sum)) {
        maxLen = i - j;
        result = sum;
      }
    }
  }

  return result;
}

consecutivePrimeSum(1000000);
