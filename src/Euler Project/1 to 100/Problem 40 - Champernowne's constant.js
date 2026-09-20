function champernownesConstant(n) {
  function digitAt(k) {
    let count = 9,
      d = 1,
      start = 1;
    while (k > count * d) {
      k -= count * d;
      d++;
      start *= 10;
      count = 9 * start;
    }
    const idx = k - 1,
      num = start + Math.floor(idx / d),
      pos = idx % d;
    return String(num).charCodeAt(pos) - 48;
  }
  let p = 1,
    prod = 1;
  while (p <= n) {
    prod *= digitAt(p);
    p *= 10;
  }
  return prod;
}

champernownesConstant(100);
