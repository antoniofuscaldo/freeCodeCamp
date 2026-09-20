function sumSquareDifference(n) {
  let sum = 0,
    sumSquares = 0;
  for (let i = 1; i <= n; i++) {
    sumSquares += i * i;
    sum += i;
  }
  return sum * sum - sumSquares;
}

sumSquareDifference(100);
