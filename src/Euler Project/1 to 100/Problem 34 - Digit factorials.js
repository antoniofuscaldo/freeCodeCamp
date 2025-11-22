/**

Problem 34: Digit factorials

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.

*/

function digitFactorial() {
  const fact = [1];
  for (let i = 1; i <= 9; i++) fact[i] = fact[i - 1] * i;
  let numbers = [],
    sum = 0;
  for (let n = 10; n <= 2540160; n++) {
    let s = 0,
      m = n;
    while (m > 0) {
      s += fact[m % 10];
      m = Math.floor(m / 10);
    }
    if (s === n) {
      numbers.push(n);
      sum += n;
    }
  }
  return { sum, numbers };
}
