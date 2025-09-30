/**

Problem 30: Digit n powers

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of n powers of their digits.

*/

function digitnPowers(n) {
  const powers = Array.from({ length: 10 }, (_, d) => d ** n);

  let limit = 1;
  while (limit * powers[9] >= 10 ** (limit - 1)) limit++;
  const max = limit * powers[9];

  let total = 0;
  for (let i = 2; i <= max; i++) {
    let sum = 0;
    let x = i;
    while (x > 0) {
      sum += powers[x % 10];
      x = (x / 10) | 0;
    }
    if (sum === i) total += i;
  }
  return total;
}

digitnPowers(5);
