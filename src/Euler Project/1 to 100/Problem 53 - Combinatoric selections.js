function combinatoricSelections(limit) {
  if (!Number.isFinite(limit) || limit < 0) return 0;
  const L = BigInt(Math.floor(limit));
  let total = 0;
  for (let n = 1; n <= 100; n++) {
    let c = 1n;
    for (let r = 1; r <= Math.floor(n / 2); r++) {
      c = (c * BigInt(n - r + 1)) / BigInt(r);
      if (c > L) {
        total += n - 2 * r + 1;
        break;
      }
    }
  }
  return total;
}

combinatoricSelections(1000000);
