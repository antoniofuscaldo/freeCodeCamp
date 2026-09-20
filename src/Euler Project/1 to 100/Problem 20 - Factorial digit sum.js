function sumFactorialDigits(n) {
  const digits = [1];
  for (let i = 2; i <= n; i++) {
    let carry = 0;
    for (let j = 0; j < digits.length; j++) {
      const v = digits[j] * i + carry;
      digits[j] = v % 10;
      carry = (v / 10) | 0;
    }
    while (carry > 0) {
      digits.push(carry % 10);
      carry = (carry / 10) | 0;
    }
  }
  let sum = 0;
  for (let k = 0; k < digits.length; k++) sum += digits[k];
  return sum;
}

sumFactorialDigits(100);
