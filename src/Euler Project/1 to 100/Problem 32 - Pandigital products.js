/**

Problem 32: Pandigital products

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through n pandigital.

Hint: Some products can be obtained in more than one way so be sure to only include it once in your sum.

*/

function pandigitalProducts(n) {
  if (n < 4) return 0;
  const pow10 = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000],
    targetMask = (1 << n) - 1,
    products = new Set();

  function isPandigital(a, b, p) {
    let count = 0,
      mask = 0;

    function addDigits(x) {
      while (x > 0) {
        const d = x % 10;
        if (d === 0 || d > n) return false;
        const bit = 1 << (d - 1);
        if (mask & bit) return false;
        mask |= bit;
        count++;
        x = (x / 10) | 0;
      }
      return true;
    }

    if (!addDigits(a)) return false;
    if (!addDigits(b)) return false;
    if (!addDigits(p)) return false;
    return count === n && mask === targetMask;
  }

  for (let da = 1; da <= n - 2; da++) {
    for (let db = 1; db <= n - da - 1; db++) {
      const dp = n - da - db,
        minA = pow10[da - 1],
        maxA = pow10[da] - 1,
        minB = pow10[db - 1],
        maxB = pow10[db] - 1,
        minP = pow10[dp - 1],
        maxP = pow10[dp] - 1;

      for (let a = minA; a <= maxA; a++) {
        for (let b = minB; b <= maxB; b++) {
          const p = a * b;
          if (p < minP || p > maxP) continue;
          if (isPandigital(a, b, p)) products.add(p);
        }
      }
    }
  }

  let sum = 0;
  for (const x of products) sum += x;
  return sum;
}

pandigitalProducts(4);
