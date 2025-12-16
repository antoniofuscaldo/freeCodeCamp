/**

Problem 55: Lychrel numbers

If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

Not all numbers produce palindromes so quickly. For example,

349 + 943 = 1292,
1292 + 2921 = 4213
4213 + 3124 = 7337
That is, 349 took three iterations to arrive at a palindrome.

Although no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).

Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.

How many Lychrel numbers are there below num?

Note: Wording was modified slightly on 24 April 2007 to emphasize the theoretical nature of Lychrel numbers.

*/

function countLychrelNumbers(num) {
  function isPalindromeStr(s) {
    let i = 0,
      j = s.length - 1;
    while (i < j) {
      if (s[i++] !== s[j--]) return false;
    }
    return true;
  }

  function reverseBigInt(n) {
    const s = n.toString();
    let r = '';
    for (let i = s.length - 1; i >= 0; i--) r += s[i];
    return BigInt(r);
  }

  function isLychrel(n) {
    let x = BigInt(n);
    for (let i = 0; i < 50; i++) {
      x = x + reverseBigInt(x);
      if (isPalindromeStr(x.toString())) return false;
    }
    return true;
  }

  let count = 0;
  for (let i = 1; i < num; i++) {
    if (isLychrel(i)) count++;
  }
  return count;
}

countLychrelNumbers(10000);
