function coinSums(n) {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200],
    ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (const c of coins) {
    for (let i = c; i <= n; i++) {
      ways[i] += ways[i - c];
    }
  }

  return ways[n];
}

coinSums(200);
