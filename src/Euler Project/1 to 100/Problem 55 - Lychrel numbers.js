function countLychrelNumbers(num) {
  function isPalindromeStr(s) {
    let i = 0,
      j = s.length - 1;
    while (i < j) {
      if (s[i++] !== s[j--]) return false;
    }
    return true;
  }

  function reverseBigInt(n) {
    const s = n.toString();
    let r = '';
    for (let i = s.length - 1; i >= 0; i--) r += s[i];
    return BigInt(r);
  }

  function isLychrel(n) {
    let x = BigInt(n);
    for (let i = 0; i < 50; i++) {
      x += reverseBigInt(x);
      if (isPalindromeStr(x.toString())) return false;
    }
    return true;
  }

  let count = 0;
  for (let i = 1; i < num; i++) {
    if (isLychrel(i)) count++;
  }
  return count;
}

countLychrelNumbers(10000);
