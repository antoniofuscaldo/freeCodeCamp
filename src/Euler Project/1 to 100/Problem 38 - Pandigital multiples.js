function pandigitalMultiples(k) {
  function isPandigital(s, k) {
    if (s.length !== k) return false;
    const set = new Set(s.split(''));
    if (set.size !== k) return false;
    for (let i = 1; i <= k; i++) {
      if (!set.has(String(i))) return false;
    }
    return true;
  }
  let max = 0;
  for (let i = 1; i < 10000; i++) {
    let concat = '',
      n = 1;
    while (concat.length < k) {
      concat += String(i * n);
      n++;
    }
    if (isPandigital(concat, k)) {
      const val = +concat;
      if (val > max) max = val;
    }
  }
  return max;
}

pandigitalMultiples(8);
