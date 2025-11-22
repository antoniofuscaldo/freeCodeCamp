/**

Problem 20: Factorial digit sum

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits n!

*/

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
