/**

Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

Your function should handle sequences of any length greater than or equal to zero.
If the length is zero, return an empty array.
Note that the starting numbers are part of the sequence.

Tests:
Waiting:1. fibonacciSequence([0, 1], 20) should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181].
Waiting:2. fibonacciSequence([21, 32], 1) should return [21].
Waiting:3. fibonacciSequence([0, 1], 0) should return [].
Waiting:4. fibonacciSequence([10, 20], 2) should return [10, 20].
Waiting:5. fibonacciSequence([123456789, 987654321], 5) should return [123456789, 987654321, 1111111110, 2098765431, 3209876541].

*/

export function fibonacciSequence(startSequence, length) {
  if (length === 0) return [];
  if (length === 1) return [startSequence[0]];

  const result = [startSequence[0], startSequence[1]];
  while (result.length < length) {
    const n = result.length;
    result.push(result[n - 1] + result[n - 2]);
  }
  return result.slice(0, length);
}
