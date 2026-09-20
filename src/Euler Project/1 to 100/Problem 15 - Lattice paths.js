function latticePaths(gridSize) {
  function factorial(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const n = BigInt(gridSize),
    numerator = factorial(2n * n),
    denominator = factorial(n) * factorial(n);
  return Number(numerator / denominator);
}

latticePaths(4);
