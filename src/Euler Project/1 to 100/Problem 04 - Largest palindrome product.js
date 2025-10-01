/**

Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

*/

function largestPalindromeProduct(n) {
  let max = 0;
  let upper = 10 ** n - 1;
  let lower = 10 ** (n - 1);
  for (let i = upper; i >= lower; i--) {
    for (let j = i; j >= lower; j--) {
      let prod = i * j;
      if (prod <= max) break;
      let s = prod.toString();
      if (s === s.split("").reverse().join("")) {
        max = prod;
      }
    }
  }
  return max;
}
