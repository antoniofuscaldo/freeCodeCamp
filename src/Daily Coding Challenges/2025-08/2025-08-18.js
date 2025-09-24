/**

Factorializer

Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

The factorial of zero is 1.

*/

function factorial(n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
