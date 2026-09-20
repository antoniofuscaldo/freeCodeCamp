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
  let bestLen = 0,
    bestProduct = 0;

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
