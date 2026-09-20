function pandigitalPrime(n) {
  function isPrime(x) {
    if (x < 2) return false;
    if (x % 2 === 0) return x === 2;
    for (let i = 3; i * i <= x; i += 2) {
      if (x % i === 0) return false;
    }
    return true;
  }
  function* permutations(arr) {
    if (arr.length === 1) yield arr;
    else {
      for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(0, i).concat(arr.slice(i + 1));
        for (const p of permutations(rest)) yield [arr[i]].concat(p);
      }
    }
  }
  const digits = [];
  for (let i = 1; i <= n; i++) digits.push(String(i));
  let max = 0;
  for (const p of permutations(digits)) {
    const num = +p.join('');
    if (isPrime(num) && num > max) max = num;
  }
  return max;
}

pandigitalPrime(7);
