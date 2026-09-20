function digitFibonacci(n) {
  let a = '1',
    b = '1',
    index = 2;

  function addStrings(x, y) {
    let res = '',
      carry = 0,
      i = x.length - 1,
      j = y.length - 1;
    while (i >= 0 || j >= 0 || carry) {
      let sum = carry;
      if (i >= 0) sum += x.charCodeAt(i--) - 48;
      if (j >= 0) sum += y.charCodeAt(j--) - 48;
      res = (sum % 10) + res;
      carry = Math.floor(sum / 10);
    }
    return res;
  }

  while (b.length < n) {
    const temp = addStrings(a, b);
    a = b;
    b = temp;
    index++;
  }

  return index;
}

digitFibonacci(20);
