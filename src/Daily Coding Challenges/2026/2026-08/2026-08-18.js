/**

Factorializer

Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

The factorial of zero is 1.

Tests:
Waiting:1. factorial(0) should return 1.
Waiting:2. factorial(5) should return 120.
Waiting:3. factorial(20) should return 2432902008176640000.

 */

export function factorial(n) {
  if (!Number.isInteger(n) || n < 0 || n > 20) {
    throw new Error('n must be an integer between 0 and 20 inclusive');
  }

  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }

  return Number(result);
}
