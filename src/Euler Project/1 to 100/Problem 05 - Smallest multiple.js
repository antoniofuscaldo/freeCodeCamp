function smallestMult(n) {
  function gcd(a, b) {
    while (b !== 0) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}

smallestMult(20);
