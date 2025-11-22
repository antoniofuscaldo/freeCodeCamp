/**

Problem 21: Amicable numbers

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under n.

*/

function sumAmicableNum(n) {
  function d(num) {
    let sum = 1,
      sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        sum += i;
        const other = num / i;
        if (other !== i) sum += other;
      }
    }
    return num === 1 ? 0 : sum;
  }

  let total = 0;
  for (let a = 2; a < n; a++) {
    const b = d(a);
    if (b !== a && b < n && d(b) === a) {
      total += a;
    }
  }
  return total;
}

sumAmicableNum(10000);
