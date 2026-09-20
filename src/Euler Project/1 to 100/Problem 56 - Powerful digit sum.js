function multiplyDigits(num, factor) {
  let carry = 0;
  for (let i = 0; i < num.length; i++) {
    const prod = num[i] * factor + carry;
    num[i] = prod % 10;
    carry = Math.floor(prod / 10);
  }
  while (carry > 0) {
    num.push(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return num;
}

function powerDigits(base, exp) {
  let digits = [1];
  for (let i = 0; i < exp; i++) {
    digits = multiplyDigits(digits, base);
  }
  return digits;
}

function digitSum(digits) {
  return digits.reduce((a, b) => a + b, 0);
}

function powerfulDigitSum(n) {
  let maxSum = 0;
  for (let a = 1; a < n; a++) {
    for (let b = 1; b < n; b++) {
      const digits = powerDigits(a, b),
        sum = digitSum(digits);
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
}

powerfulDigitSum(3);
