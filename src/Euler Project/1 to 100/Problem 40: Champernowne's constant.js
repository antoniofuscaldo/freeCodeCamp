/**

Problem 40: Champernowne's constant

An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

*/

function champernownesConstant(n) {
  function digitAt(k) {
    var d = 1;
    var start = 1;
    var count = 9;
    while (k > count * d) {
      k -= count * d;
      d++;
      start *= 10;
      count = 9 * start;
    }
    var idx = k - 1;
    var num = start + Math.floor(idx / d);
    var pos = idx % d;
    return String(num).charCodeAt(pos) - 48;
  }
  var prod = 1;
  var p = 1;
  while (p <= n) {
    prod *= digitAt(p);
    p *= 10;
  }
  return prod;
}

champernownesConstant(100);
