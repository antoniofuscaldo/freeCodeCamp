/** 

Problem 23: Non-abundant sums

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.

*/

function sumOfNonAbundantNumbers(n) {
  function sumDivisors(num) {
    if (num === 1) return 0;
    let sum = 1,
      sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        sum += i;
        const other = num / i;
        if (other !== i) sum += other;
      }
    }
    return sum;
  }

  const abundants = [];
  for (let i = 12; i <= n; i++) {
    if (sumDivisors(i) > i) abundants.push(i);
  }

  const canBeWritten = new Array(n + 1).fill(false);
  for (let i = 0; i < abundants.length; i++) {
    for (let j = i; j < abundants.length; j++) {
      const sum = abundants[i] + abundants[j];
      if (sum <= n) canBeWritten[sum] = true;
      else break;
    }
  }

  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (!canBeWritten[i]) total += i;
  }
  return total;
}

sumOfNonAbundantNumbers(28123);
