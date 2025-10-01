/**

Problem 33: Digit cancelling fractions

The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

*/

function digitCancellingFractions() {
  function gcd(a, b) {
    while (b) {
      const t = a % b;
      a = b;
      b = t;
    }
    return a;
  }

  let numProd = 1;
  let denProd = 1;

  for (let n = 10; n < 100; n++) {
    for (let d = n + 1; d < 100; d++) {
      if (n % 10 === 0 && d % 10 === 0) continue;
      const n1 = (n / 10) | 0,
        n2 = n % 10;
      const d1 = (d / 10) | 0,
        d2 = d % 10;

      if (n1 === d1 && n1 !== 0 && d2 !== 0 && n * d2 === d * n2) {
        numProd *= n2;
        denProd *= d2;
        continue;
      }
      if (n1 === d2 && n1 !== 0 && d1 !== 0 && n * d1 === d * n2) {
        numProd *= n2;
        denProd *= d1;
        continue;
      }
      if (n2 === d1 && n2 !== 0 && d2 !== 0 && n * d2 === d * n1) {
        numProd *= n1;
        denProd *= d2;
        continue;
      }
      if (n2 === d2 && n2 !== 0 && d1 !== 0 && n * d1 === d * n1) {
        numProd *= n1;
        denProd *= d1;
        continue;
      }
    }
  }

  const g = gcd(numProd, denProd);
  return denProd / g;
}

digitCancellingFractions();
