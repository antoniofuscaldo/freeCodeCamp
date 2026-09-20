function consecutivePrimeSum(limit) {
  function isPrime(n) {
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const primes = [];

  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) primes.push(i);
  }

  const prefix = [0];

  for (const p of primes) {
    prefix.push(prefix[prefix.length - 1] + p);
  }

  let maxLen = 0,
    result = 0;

  for (let i = 0; i < prefix.length; i++) {
    for (let j = i - (maxLen + 1); j >= 0; j--) {
      const sum = prefix[i] - prefix[j];
      if (sum >= limit) break;
      if (isPrime(sum)) {
        maxLen = i - j;
        result = sum;
      }
    }
  }

  return result;
}

consecutivePrimeSum(1000000);
