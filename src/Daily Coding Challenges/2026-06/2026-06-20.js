/**

Prime Factorization

Given an integer greater than 1, return its prime factorization as an array of numbers in ascending order.

A prime factorization is the set of prime numbers that multiply together to produce the given integer. Each number has exactly one set. For example, the prime factorization of 20 is [2, 2, 5] because 2 * 2 * 5 = 20.

If the given integer is itself prime, return it in a single-element array.

*/

function primeFactorization(n) {
  if (!Number.isInteger(n) || n <= 1) {
    throw new Error('Input must be an integer greater than 1');
  }

  const factors = [];
  let num = n;

  for (let p = 2; p * p <= num; p++) {
    while (num % p === 0) {
      factors.push(p);
      num = Math.floor(num / p);
    }
  }

  if (num > 1) factors.push(num);

  return factors;
}
