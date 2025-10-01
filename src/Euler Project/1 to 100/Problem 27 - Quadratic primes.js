/**

Problem 27: Quadratic primes

Euler discovered the remarkable quadratic formula:

n2+n+41
 
It turns out that the formula will produce 40 primes for the consecutive integer values  0≤n≤39
 . However, when  n=40,402+40+41=40(40+1)+41
  is divisible by 41, and certainly when  n=41,412+41+41
  is clearly divisible by 41.

The incredible formula  n2−79n+1601
  was discovered, which produces 80 primes for the consecutive values  0≤n≤79
 . The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n2+an+b
 , where  |a|<range
  and  |b|≤range
 
where  |n|
  is the modulus/absolute value of  n
 
e.g.  |11|=11
  and  |−4|=4
 
Find the product of the coefficients,  a
  and  b
 , for the quadratic expression that produces the maximum number of primes for consecutive values of  n
 , starting with  n=0
 .

*/

function quadraticPrimes(range) {
  function isPrime(x) {
    if (x < 2) return false;
    if (x % 2 === 0) return x === 2;
    for (let i = 3; i * i <= x; i += 2) if (x % i === 0) return false;
    return true;
  }

  function primesUpTo(m) {
    const sieve = new Array(m + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;
    for (let i = 2; i * i <= m; i++)
      if (sieve[i]) for (let j = i * i; j <= m; j += i) sieve[j] = false;
    const res = [];
    for (let i = 2; i <= m; i++) if (sieve[i]) res.push(i);
    return res;
  }

  const bPrimes = primesUpTo(range);
  let bestLen = 0;
  let bestProduct = 0;

  for (let a = -range + 1; a < range; a++) {
    for (let bi = 0; bi < bPrimes.length; bi++) {
      const b = bPrimes[bi];
      let n = 0;
      while (true) {
        const val = n * n + a * n + b;
        if (!isPrime(val)) break;
        n++;
      }
      if (n > bestLen) {
        bestLen = n;
        bestProduct = a * b;
      }
    }
  }

  return bestProduct;
}

quadraticPrimes(1000);
