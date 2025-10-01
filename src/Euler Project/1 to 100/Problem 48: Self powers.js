/**

Problem 48: Self powers

The series, 11 + 22 + 33 + ... + 1010 = 10405071317.

Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.

*/

function selfPowers(power, lastDigits) {
  const mod = 10 ** lastDigits;
  let sum = 0;

  for (let i = 1; i <= power; i++) {
    let term = 1;
    for (let j = 0; j < i; j++) {
      term = (term * i) % mod;
    }
    sum = (sum + term) % mod;
  }

  return sum;
}

selfPowers(1000, 10);
