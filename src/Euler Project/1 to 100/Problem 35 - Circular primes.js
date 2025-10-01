/**

Problem 35: Circular primes

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below n, whereas 100 ≤ n ≤ 1000000?

Note:

Circular primes individual rotation can exceed n.

*/

function circularPrimes(n) {
  var limit = 1000000;
  var isPrime = new Array(limit).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (var i = 2; i * i < limit; i++) {
    if (isPrime[i]) {
      for (var j = i * i; j < limit; j += i) isPrime[j] = false;
    }
  }
  var count = 0;
  for (var p = 2; p < n; p++) {
    if (!isPrime[p]) continue;
    var s = String(p);
    if (s.length > 1) {
      var bad = false;
      for (var k = 0; k < s.length; k++) {
        var d = s.charCodeAt(k) - 48;
        if (d === 0 || d === 2 || d === 4 || d === 5 || d === 6 || d === 8) {
          bad = true;
          break;
        }
      }
      if (bad) continue;
    }
    var allPrime = true;
    for (var r = 1; r < s.length; r++) {
      var rot = s.slice(r) + s.slice(0, r);
      var val = +rot;
      if (!isPrime[val]) {
        allPrime = false;
        break;
      }
    }
    if (allPrime) count++;
  }
  return count;
}

circularPrimes(1000000);
