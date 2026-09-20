function substringDivisibility(n) {
  const primes = [2, 3, 5, 7, 11, 13, 17].slice(0, Math.max(0, n - 2)),
    used = new Array(n + 1).fill(false),
    arr = new Array(n + 1);
  let sum = 0;
  function dfs(pos) {
    if (pos === n + 1) {
      let value = 0;
      for (let i = 0; i <= n; i++) value = value * 10 + arr[i];
      sum += value;
      return;
    }
    for (let d = 0; d <= n; d++) {
      if (used[d]) continue;
      arr[pos] = d;
      used[d] = true;
      if (pos >= 3) {
        const i = pos - 3;
        if (i >= 0 && i < primes.length) {
          const val = arr[pos - 2] * 100 + arr[pos - 1] * 10 + arr[pos];
          if (val % primes[i] !== 0) {
            used[d] = false;
            continue;
          }
        }
      }
      dfs(pos + 1);
      used[d] = false;
    }
  }
  dfs(0);
  return sum;
}

substringDivisibility(5);
