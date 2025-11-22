/**

Integer Sequence

Given a positive integer, return a string with all of the integers from 1 up to, and including, the given number, in numerical order.

For example, given 5, return "12345".

*/

function sequence(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
