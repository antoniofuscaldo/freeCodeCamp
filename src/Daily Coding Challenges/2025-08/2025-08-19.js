/**

Sum of Squares

Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

 */

function sumOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}
