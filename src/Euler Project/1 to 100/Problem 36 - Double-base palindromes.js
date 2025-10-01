/**

Problem 36: Double-base palindromes

The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than n, whereas 1000 ≤ n ≤ 1000000, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

*/

function doubleBasePalindromes(n) {
  function isPalindrome(s) {
    return s === s.split("").reverse().join("");
  }
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (isPalindrome(String(i)) && isPalindrome(i.toString(2))) {
      sum += i;
    }
  }
  return sum;
}

doubleBasePalindromes(1000000);
