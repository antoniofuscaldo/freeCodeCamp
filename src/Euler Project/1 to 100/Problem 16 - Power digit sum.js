function powerDigitSum(exponent) {
  const digits = [1];

  for (let i = 0; i < exponent; i++) {
    let carry = 0;
    for (let j = 0; j < digits.length; j++) {
      const val = digits[j] * 2 + carry;
      digits[j] = val % 10;
      carry = Math.floor(val / 10);
    }
    if (carry > 0) digits.push(carry);
  }

  return digits.reduce((sum, d) => sum + d, 0);
}

powerDigitSum(15);
