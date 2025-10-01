/**

Problem 14: Longest Collatz sequence

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above limit.

*/

function longestCollatzSequence(limit) {
  const memo = new Map();

  function collatzLength(n) {
    if (n === 1) return 1;
    if (memo.has(n)) return memo.get(n);
    let next = n % 2 === 0 ? n / 2 : 3 * n + 1;
    let length = 1 + collatzLength(next);
    memo.set(n, length);
    return length;
  }

  let maxLength = 0;
  let number = 0;

  for (let i = 1; i < limit; i++) {
    let length = collatzLength(i);
    if (length > maxLength) {
      maxLength = length;
      number = i;
    }
  }

  return number;
}

longestCollatzSequence(14);
