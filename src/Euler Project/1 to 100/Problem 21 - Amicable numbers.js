function sumAmicableNum(n) {
  function d(num) {
    let sum = 1,
      sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        sum += i;
        const other = num / i;
        if (other !== i) sum += other;
      }
    }
    return num === 1 ? 0 : sum;
  }

  let total = 0;
  for (let a = 2; a < n; a++) {
    const b = d(a);
    if (b !== a && b < n && d(b) === a) {
      total += a;
    }
  }
  return total;
}

sumAmicableNum(10000);
