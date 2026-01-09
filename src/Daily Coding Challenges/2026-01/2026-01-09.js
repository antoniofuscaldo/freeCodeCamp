/**

Circular Prime

Given an integer, determine if it is a circular prime.

A circular prime is an integer where all rotations of its digits are themselves prime.

For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.

*/

function isCircularPrime(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 2) return false;

  function isPrime(x) {
    if (x < 2) return false;
    if (x === 2 || x === 3) return true;
    if (x % 2 === 0) return false;
    const limit = Math.floor(Math.sqrt(x));
    for (let i = 3; i <= limit; i += 2) {
      if (x % i === 0) return false;
    }
    return true;
  }

  const s = String(n);
  const len = s.length;
  let rot = s;
  for (let i = 0; i < len; i++) {
    const value = parseInt(rot, 10);
    if (!isPrime(value)) return false;
    // rotate left by one digit
    rot = rot.slice(1) + rot[0];
  }

  return true;
}
