/** 

Nth Fibonacci Number

Given an integer n, return the nth number in the fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

*/

function nthFibonacci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let curr = 1,
    prev = 0;

  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
