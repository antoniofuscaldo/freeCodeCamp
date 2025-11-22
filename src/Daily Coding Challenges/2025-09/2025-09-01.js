/**

Tribonacci Sequence

The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

Your function should handle sequences of any length greater than or equal to zero.
If the length is zero, return an empty array.
Note that the starting numbers are part of the sequence.

*/

function tribonacciSequence(startSequence, length) {
  if (length === 0) return [];
  const seq = startSequence.slice(0, length);
  while (seq.length < length) {
    const next = seq[seq.length - 1] + seq[seq.length - 2] + seq[seq.length - 3];
    seq.push(next);
  }
  return seq;
}
