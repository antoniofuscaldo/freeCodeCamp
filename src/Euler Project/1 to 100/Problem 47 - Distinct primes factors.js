/**

Problem 47: Distinct primes factors

The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5
The first three consecutive numbers to have three distinct prime factors are:

644 = 22 × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19
Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

*/

function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  function primeFactorsCount(n) {
    let count = 0,
      num = n,
      factor = 2;
    while (factor * factor <= num) {
      if (num % factor === 0) {
        count++;
        while (num % factor === 0) num /= factor;
      }
      factor++;
    }
    if (num > 1) count++;
    return count;
  }

  let consecutive = 0,
    n = 2;

  while (true) {
    if (primeFactorsCount(n) === targetNumPrimes) {
      consecutive++;
      if (consecutive === targetConsecutive) {
        return n - targetConsecutive + 1;
      }
    } else {
      consecutive = 0;
    }
    n++;
  }
}

distinctPrimeFactors(4, 4);
