function digitFactorial() {
  const fact = [1];
  for (let i = 1; i <= 9; i++) fact[i] = fact[i - 1] * i;
  let numbers = [],
    sum = 0;
  for (let n = 10; n <= 2540160; n++) {
    let s = 0,
      m = n;
    while (m > 0) {
      s += fact[m % 10];
      m = Math.floor(m / 10);
    }
    if (s === n) {
      numbers.push(n);
      sum += n;
    }
  }
  return { sum, numbers };
}
