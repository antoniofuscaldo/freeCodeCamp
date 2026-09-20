function circularPrimes(n) {
  const limit = 1000000,
    isPrime = new Array(limit).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i * i < limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < limit; j += i) isPrime[j] = false;
    }
  }
  let count = 0;
  for (let p = 2; p < n; p++) {
    if (!isPrime[p]) continue;
    const s = String(p);
    if (s.length > 1) {
      let bad = false;
      for (let k = 0; k < s.length; k++) {
        const d = s.charCodeAt(k) - 48;
        if (d === 0 || d === 2 || d === 4 || d === 5 || d === 6 || d === 8) {
          bad = true;
          break;
        }
      }
      if (bad) continue;
    }
    let allPrime = true;
    for (let r = 1; r < s.length; r++) {
      const rot = s.slice(r) + s.slice(0, r),
        val = +rot;
      if (!isPrime[val]) {
        allPrime = false;
        break;
      }
    }
    if (allPrime) count++;
  }
  return count;
}

circularPrimes(1000000);
