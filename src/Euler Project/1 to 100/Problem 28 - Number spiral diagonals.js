function spiralDiagonals(n) {
  let sum = 1;
  for (let size = 3; size <= n; size += 2) {
    sum += 4 * size * size - 6 * (size - 1);
  }
  return sum;
}

spiralDiagonals(1001);
