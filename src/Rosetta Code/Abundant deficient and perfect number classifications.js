/**

Abundant, deficient and perfect number classifications

These define three classifications of positive integers based on their proper divisors.

Let  P(n)
  be the sum of the proper divisors of n where proper divisors are all positive integers n other than n itself.

If P(n) < n then n is classed as deficient

If P(n) === n then n is classed as perfect

If P(n) > n then n is classed as abundant

Example: 6 has proper divisors of 1, 2, and 3. 1 + 2 + 3 = 6, so 6 is classed as a perfect number.

Implement a function that calculates how many of the integers from 1 to num (inclusive) are in each of the three classes. Output the result as an array in the following format [deficient, perfect, abundant].

*/

function getDPA(num) {
  function sumProperDivisors(n) {
    if (n === 1) return 0;
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        sum += i;
        if (i !== n / i && n / i !== n) {
          sum += n / i;
        }
      }
    }
    return sum;
  }

  let abundant = 0,
    deficient = 0,
    perfect = 0;

  for (let n = 1; n <= num; n++) {
    const s = sumProperDivisors(n);
    if (s < n) deficient++;
    else if (s === n) perfect++;
    else abundant++;
  }

  return [deficient, perfect, abundant];
}
