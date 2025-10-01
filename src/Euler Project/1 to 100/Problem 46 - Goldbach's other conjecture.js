/**

Problem 46: Goldbach's other conjecture

It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×12
15 = 7 + 2×22
21 = 3 + 2×32
25 = 7 + 2×32
27 = 19 + 2×22
33 = 31 + 2×12
It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

*/

function goldbachsOtherConjecture() {
  function isPrime(n) {
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function canBeWritten(n) {
    for (let p = 2; p < n; p++) {
      if (isPrime(p)) {
        let rest = n - p;
        if (rest % 2 === 0) {
          let s = Math.sqrt(rest / 2);
          if (Number.isInteger(s)) return true;
        }
      }
    }
    return false;
  }

  let n = 9;
  while (true) {
    if (!isPrime(n)) {
      if (!canBeWritten(n)) return n;
    }
    n += 2;
  }
}

goldbachsOtherConjecture();
