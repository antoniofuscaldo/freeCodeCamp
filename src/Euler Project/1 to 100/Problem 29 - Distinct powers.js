function distinctPowers(n) {
  if (n < 2) return 0;
  const sieve = new Array(n + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;
  for (let i = 2; i * i <= n; i++)
    if (sieve[i]) for (let j = i * i; j <= n; j += i) sieve[j] = false;
  const primes = [];
  for (let i = 2; i <= n; i++) if (sieve[i]) primes.push(i);

  const facs = new Array(n + 1);
  function factorize(a) {
    if (facs[a]) return facs[a];
    let x = a;
    const f = [];
    for (let i = 0; i < primes.length && primes[i] * primes[i] <= x; i++) {
      const p = primes[i];
      if (x % p === 0) {
        let c = 0;
        while (x % p === 0) {
          x /= p;
          c++;
        }
        f.push([p, c]);
      }
    }
    if (x > 1) f.push([x, 1]);
    facs[a] = f;
    return f;
  }

  const set = new Set();
  for (let a = 2; a <= n; a++) {
    const fa = factorize(a);
    for (let b = 2; b <= n; b++) {
      let key = '';
      for (let i = 0; i < fa.length; i++) {
        key += `${fa[i][0]}:${fa[i][1] * b},`;
      }
      set.add(key);
    }
  }
  return set.size;
}

distinctPowers(30);
