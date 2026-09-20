function primeDigitReplacements(n) {
  function isPrime(num) {
    if (num < 2) return false;
    if (num % 2 === 0) return num === 2;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function getSubsets(indices) {
    const res = [],
      m = indices.length;
    for (let mask = 1; mask < 1 << m; mask++) {
      const subset = [];
      for (let i = 0; i < m; i++) {
        if (mask & (1 << i)) subset.push(indices[i]);
      }
      res.push(subset);
    }
    return res;
  }

  for (let p = 2; ; p++) {
    if (!isPrime(p)) continue;
    const s = String(p);
    for (let d = 0; d <= 9; d++) {
      const positions = [];
      for (let i = 0; i < s.length; i++) {
        if (s[i] === String(d)) positions.push(i);
      }
      if (positions.length === 0) continue;
      const subsets = getSubsets(positions);
      for (const subset of subsets) {
        let count = 0,
          minMember = Infinity;
        for (let r = 0; r <= 9; r++) {
          if (subset.includes(0) && r === 0) continue;
          const arr = s.split('');
          for (const pos of subset) arr[pos] = String(r);
          if (arr[0] === '0') continue;
          const num = Number(arr.join(''));
          if (isPrime(num)) {
            count++;
            if (num < minMember) minMember = num;
          }
        }
        if (count === n) return minMember;
      }
    }
  }
}

primeDigitReplacements(6);
