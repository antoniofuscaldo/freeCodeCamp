/**

Sum of Squares

Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

Tests:
Waiting:1. sumOfSquares(5) should return 55.
Waiting:2. sumOfSquares(10) should return 385.
Waiting:3. sumOfSquares(25) should return 5525.
Waiting:4. sumOfSquares(500) should return 41791750.
Waiting:5. sumOfSquares(1000) should return 333833500.

*/

export function sumOfSquares(n) {
  if (!Number.isInteger(n) || n < 0 || n > 1000) {
    throw new Error('n must be an integer between 0 and 1000 inclusive');
  }
  return (n * (n + 1) * (2 * n + 1)) / 6;
}
