function largestPalindromeProduct(n) {
  let max = 0,
    upper = 10 ** n - 1,
    lower = 10 ** (n - 1);
  for (let i = upper; i >= lower; i--) {
    for (let j = i; j >= lower; j--) {
      const prod = i * j;
      if (prod <= max) break;
      const s = prod.toString();
      if (s === s.split('').reverse().join('')) {
        max = prod;
      }
    }
  }
  return max;
}
