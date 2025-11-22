/**

Problem 16: Power digit sum
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2exponent?

*/

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
