function triPentaHexa(n) {
  function isPent(x) {
    const s = Math.sqrt(24 * x + 1);
    return Number.isInteger(s) && Number.isInteger((1 + s) / 6);
  }
  let k = Math.ceil((1 + Math.sqrt(1 + 8 * n)) / 4);
  while (true) {
    const h = k * (2 * k - 1);
    if (h > n && isPent(h)) return h;
    k++;
  }
}

triPentaHexa(40756);
