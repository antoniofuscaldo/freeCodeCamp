/**

Palindrome Characters

Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).

A palindrome is a string that is the same forward and backward.
If it's not a palindrome, return "none".

*/

function palindromeLocator(str) {
  const rev = str.split('').reverse().join('');
  if (rev !== str) return 'none';
  const n = str.length;
  if (n % 2 === 1) return str[Math.floor(n / 2)];
  return str[n / 2 - 1] + str[n / 2];
}
