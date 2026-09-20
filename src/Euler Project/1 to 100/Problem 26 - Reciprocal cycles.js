function reciprocalCycles(n) {
  function cycleLen(d) {
    while (d % 2 === 0) d /= 2;
    while (d % 5 === 0) d /= 5;
    if (d === 1) return 0;
    let rem = 10 % d,
      len = 1;
    while (rem !== 1) {
      rem = (rem * 10) % d;
      len++;
    }
    return len;
  }

  let bestD = 0,
    bestLen = 0;
  for (let d = 2; d < n; d++) {
    const len = cycleLen(d);
    if (len > bestLen) {
      bestLen = len;
      bestD = d;
    }
  }
  return bestD;
}

reciprocalCycles(1000);
