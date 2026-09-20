function pentagonNumbers() {
  function isPentagonal(x) {
    const n = (1 + Math.sqrt(24 * x + 1)) / 6;
    return n === Math.floor(n);
  }
  const pent = [];
  for (let i = 1; i < 10000; i++) pent.push((i * (3 * i - 1)) / 2);
  let minD = Infinity;
  for (let j = 0; j < pent.length; j++) {
    for (let k = j + 1; k < pent.length; k++) {
      const sum = pent[j] + pent[k],
        diff = pent[k] - pent[j];
      if (isPentagonal(sum) && isPentagonal(diff)) {
        if (diff < minD) minD = diff;
      }
    }
  }
  return minD;
}

pentagonNumbers();
