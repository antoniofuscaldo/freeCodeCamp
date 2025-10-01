/**

Problem 9: Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

*/

function specialPythagoreanTriplet(n) {
  for (let m = 2; m * m < n; m++) {
    for (let r = 1; r < m; r++) {
      if ((m + r) % 2 === 1 && gcd(m, r) === 1) {
        let s = 2 * m * (m + r);
        if (n % s === 0) {
          let k = n / s;
          let a = k * (m * m - r * r);
          let b = k * (2 * m * r);
          let c = k * (m * m + r * r);
          return a * b * c;
        }
      }
    }
  }
  return -1;
  function gcd(a, b) {
    while (b) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
}

specialPythagoreanTriplet(1000);
