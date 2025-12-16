/**

Permutation Count

Given a string, return the number of distinct permutations that can be formed from its characters.

A permutation is any reordering of the characters in the string.
Do not count duplicate permutations.
If the string contains repeated characters, repeated arrangements should only be counted once.
The string will contain only letters (A-Z, a-z).
For example, given "abb", return 3 because there's three unique ways to arrange the letters: "abb", "bab", and "bba".

*/

function countPermutations(str) {
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let total = factorial(str.length);

  for (let char in freq) {
    total /= factorial(freq[char]);
  }

  return total;
}
