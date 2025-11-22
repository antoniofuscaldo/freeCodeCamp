/**

Problem 37: Truncatable primes

The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only n (8 ≤ n ≤ 11) primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

*/

function truncatablePrimes(n) {
  function isPrime(x) {
    if (x < 2) return false;
    if (x % 2 === 0) return x === 2;
    for (let i = 3; i * i <= x; i += 2) {
      if (x % i === 0) return false;
    }
    return true;
  }
  function isTruncatable(p) {
    const s = String(p);
    for (let i = 1; i < s.length; i++) {
      if (!isPrime(+s.slice(i)) || !isPrime(+s.slice(0, s.length - i))) return false;
    }
    return true;
  }
  let found = [],
    num = 11;
  while (found.length < n) {
    if (isPrime(num) && isTruncatable(num)) found.push(num);
    num += 2;
  }
  let sum = 0;
  for (let j = 0; j < found.length; j++) sum += found[j];
  return sum;
}

truncatablePrimes(11);
