/**

Capitalized Fibonacci

Given a string, return a new string where each letter is capitalized if its index is a Fibonacci number, and lowercased otherwise.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

The first character is at index 0.
If the index of non-letter characters is a Fibonacci number, leave it unchanged.

*/

function capitalizeFibonacci(str) {
  const fib = new Set();
  let a = 0,
    b = 1;
  while (a < str.length) {
    fib.add(a);
    const next = a + b;
    a = b;
    b = next;
  }

  let out = '';
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    const isLetter = /[a-zA-Z]/.test(c);

    if (fib.has(i)) {
      out += isLetter ? c.toUpperCase() : c;
    } else {
      out += isLetter ? c.toLowerCase() : c;
    }
  }
  return out;
}
