function spiralPrimes(percent) {
  let primes = 0;
  let total = 1;
  let n = 1;

  function isPrime(x) {
    if (x < 2) return false;
    if (x % 2 === 0) return x === 2;
    const r = Math.floor(Math.sqrt(x));
    for (let i = 3; i <= r; i += 2) {
      if (x % i === 0) return false;
    }
    return true;
  }

  while (true) {
    n += 2;
    const step = n - 1;
    const sq = n * n;

    if (isPrime(sq - step)) primes++;
    if (isPrime(sq - 2 * step)) primes++;
    if (isPrime(sq - 3 * step)) primes++;

    total += 4;

    if ((primes * 100) / total < percent) return n;
  }
}
