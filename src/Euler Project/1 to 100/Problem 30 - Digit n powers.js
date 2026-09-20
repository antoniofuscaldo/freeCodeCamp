function digitnPowers(n) {
  const powers = Array.from({ length: 10 }, (_, d) => d ** n);

  let limit = 1;
  while (limit * powers[9] >= 10 ** (limit - 1)) limit++;
  const max = limit * powers[9];

  let total = 0;
  for (let i = 2; i <= max; i++) {
    let sum = 0,
      x = i;
    while (x > 0) {
      sum += powers[x % 10];
      x = (x / 10) | 0;
    }
    if (sum === i) total += i;
  }
  return total;
}

digitnPowers(5);
