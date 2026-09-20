function permutedMultiples(n) {
  function sameDigits(a, b) {
    return (
      a.toString().split('').sort().join('') ===
      b.toString().split('').sort().join('')
    );
  }

  let x = 1;
  while (true) {
    let ok = true;
    for (let k = 2; k <= n; k++) {
      if (!sameDigits(x, x * k)) {
        ok = false;
        break;
      }
    }
    if (ok) return x;
    x++;
  }
}

permutedMultiples(2);
