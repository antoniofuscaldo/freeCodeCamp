function longestCollatzSequence(limit) {
  const memo = new Map();

  function collatzLength(n) {
    if (n === 1) return 1;
    if (memo.has(n)) return memo.get(n);
    const next = n % 2 === 0 ? n / 2 : 3 * n + 1,
      length = 1 + collatzLength(next);
    memo.set(n, length);
    return length;
  }

  let maxLength = 0,
    number = 0;

  for (let i = 1; i < limit; i++) {
    const length = collatzLength(i);
    if (length > maxLength) {
      maxLength = length;
      number = i;
    }
  }

  return number;
}

longestCollatzSequence(14);
