function sumOfNonAbundantNumbers(n) {
  function sumDivisors(num) {
    if (num === 1) return 0;
    let sum = 1,
      sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        sum += i;
        const other = num / i;
        if (other !== i) sum += other;
      }
    }
    return sum;
  }

  const abundants = [];
  for (let i = 12; i <= n; i++) {
    if (sumDivisors(i) > i) abundants.push(i);
  }

  const canBeWritten = new Array(n + 1).fill(false);
  for (let i = 0; i < abundants.length; i++) {
    for (let j = i; j < abundants.length; j++) {
      const sum = abundants[i] + abundants[j];
      if (sum <= n) canBeWritten[sum] = true;
      else break;
    }
  }

  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (!canBeWritten[i]) total += i;
  }
  return total;
}

sumOfNonAbundantNumbers(28123);
