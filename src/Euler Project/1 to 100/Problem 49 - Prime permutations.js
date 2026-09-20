function primePermutations() {
  function isPrime(n) {
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function arePermutations(a, b, c) {
    const sortDigits = (x) => x.toString().split('').sort().join('');
    return sortDigits(a) === sortDigits(b) && sortDigits(b) === sortDigits(c);
  }

  const primes = [];
  for (let i = 1000; i < 10000; i++) {
    if (isPrime(i)) primes.push(i);
  }

  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      const a = primes[i],
        b = primes[j],
        diff = b - a,
        c = b + diff;
      if (c < 10000 && isPrime(c)) {
        if (arePermutations(a, b, c)) {
          if (!(a === 1487 && b === 4817 && c === 8147)) {
            return parseInt(`${a}${b}${c}`);
          }
        }
      }
    }
  }
}

primePermutations();
