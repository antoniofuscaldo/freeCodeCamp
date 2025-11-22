/**

Problem 24: Lexicographic permutations

A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210
What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

*/

function lexicographicPermutations(n) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let k = n,
    result = 0;

  function factorial(x) {
    let f = 1;
    for (let i = 2; i <= x; i++) f *= i;
    return f;
  }

  for (let i = digits.length; i > 0; i--) {
    const f = factorial(i - 1),
      index = Math.floor(k / f);
    result = result * 10 + digits[index];
    digits.splice(index, 1);
    k %= f;
  }

  return result;
}

lexicographicPermutations(999999);
