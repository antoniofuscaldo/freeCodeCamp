function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  function primeFactorsCount(n) {
    let count = 0,
      num = n,
      factor = 2;
    while (factor * factor <= num) {
      if (num % factor === 0) {
        count++;
        while (num % factor === 0) num /= factor;
      }
      factor++;
    }
    if (num > 1) count++;
    return count;
  }

  let consecutive = 0,
    n = 2;

  while (true) {
    if (primeFactorsCount(n) === targetNumPrimes) {
      consecutive++;
      if (consecutive === targetConsecutive) {
        return n - targetConsecutive + 1;
      }
    } else {
      consecutive = 0;
    }
    n++;
  }
}

distinctPrimeFactors(4, 4);
