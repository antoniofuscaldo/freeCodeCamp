function intRightTriangles(n) {
  let maxCount = 0,
    maxP = 0;
  for (let p = 2; p <= n; p++) {
    let count = 0;
    for (let a = 2; a < p / 3; a++) {
      for (let b = a; b < (p - a) / 2; b++) {
        const c = p - a - b;
        if (a * a + b * b === c * c) count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      maxP = p;
    }
  }
  return maxP;
}

intRightTriangles(500);
