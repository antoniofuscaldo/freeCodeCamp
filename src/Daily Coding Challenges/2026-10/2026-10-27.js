/**

Integer Sequence

Given a positive integer, return a string with all of the integers from 1 up to, and including, the given number, in numerical order.

For example, given 5, return "12345".

Tests:
Waiting:1. sequence(5) should return "12345".
Waiting:2. sequence(10) should return "12345678910".
Waiting:3. sequence(1) should return "1".
Waiting:4. sequence(27) should return "123456789101112131415161718192021222324252627".

*/

function sequence(n) {
  return Array.from({ length: n }, (_, i) => i + 1).join('');
}
