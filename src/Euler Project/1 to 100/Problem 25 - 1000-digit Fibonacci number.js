/**

Problem 25: 1000-digit Fibonacci number

The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain n digits?

*/

function digitFibonacci(n) {
  let a = '1',
    b = '1',
    index = 2;

  function addStrings(x, y) {
    let res = '',
      carry = 0,
      i = x.length - 1,
      j = y.length - 1;
    while (i >= 0 || j >= 0 || carry) {
      let sum = carry;
      if (i >= 0) sum += x.charCodeAt(i--) - 48;
      if (j >= 0) sum += y.charCodeAt(j--) - 48;
      res = (sum % 10) + res;
      carry = Math.floor(sum / 10);
    }
    return res;
  }

  while (b.length < n) {
    const temp = addStrings(a, b);
    a = b;
    b = temp;
    index++;
  }

  return index;
}

digitFibonacci(20);
