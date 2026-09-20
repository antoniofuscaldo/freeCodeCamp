function goldbachsOtherConjecture() {
  function isPrime(n) {
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function canBeWritten(n) {
    for (let p = 2; p < n; p++) {
      if (isPrime(p)) {
        const rest = n - p;
        if (rest % 2 === 0) {
          const s = Math.sqrt(rest / 2);
          if (Number.isInteger(s)) return true;
        }
      }
    }
    return false;
  }

  let n = 9;
  while (true) {
    if (!isPrime(n)) {
      if (!canBeWritten(n)) return n;
    }
    n += 2;
  }
}

goldbachsOtherConjecture();
