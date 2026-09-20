function divisibleTriangleNumber(n) {
  function divCount(x) {
    let count = 1,
      exp = 0;
    while (x % 2 === 0) {
      x /= 2;
      exp++;
    }
    if (exp) count *= exp + 1;
    let p = 3;
    while (p * p <= x) {
      exp = 0;
      while (x % p === 0) {
        x /= p;
        exp++;
      }
      if (exp) count *= exp + 1;
      p += 2;
    }
    if (x > 1) count *= 2;
    return count;
  }
  let k = 1;
  while (true) {
    let a, b;
    if (k % 2 === 0) {
      a = k / 2;
      b = k + 1;
    } else {
      a = k;
      b = (k + 1) / 2;
    }
    const d = divCount(a) * divCount(b);
    if (d > n) return (k * (k + 1)) / 2;
    k++;
  }
}

divisibleTriangleNumber(500);
