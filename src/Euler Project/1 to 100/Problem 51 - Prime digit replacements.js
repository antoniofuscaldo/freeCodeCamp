/**

Problem 51: Prime digit replacements

By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an n prime value family.

*/

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
    const res = [];
    const m = indices.length;
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
        let count = 0;
        let minMember = Infinity;
        for (let r = 0; r <= 9; r++) {
          if (subset.includes(0) && r === 0) continue;
          const arr = s.split("");
          for (const pos of subset) arr[pos] = String(r);
          if (arr[0] === "0") continue;
          const num = Number(arr.join(""));
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
