function primePairSets() {
  function isPrime(n) {
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    var r = Math.floor(Math.sqrt(n));
    for (var i = 3; i <= r; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  var concatCache = {};
  function concatPrime(a, b) {
    var key = a + ',' + b;
    if (concatCache[key] !== undefined) return concatCache[key];
    var v = parseInt(String(a) + String(b), 10);
    var res = isPrime(v);
    concatCache[key] = res;
    return res;
  }

  var limit = 10000;
  var primes = [];
  for (var i = 2; i < limit; i++) {
    if (isPrime(i)) primes.push(i);
  }

  var compat = {};
  for (var i = 0; i < primes.length; i++) {
    var p = primes[i];
    compat[p] = [];
  }

  for (var i = 0; i < primes.length; i++) {
    for (var j = i + 1; j < primes.length; j++) {
      var a = primes[i];
      var b = primes[j];
      if (concatPrime(a, b) && concatPrime(b, a)) {
        compat[a].push(b);
        compat[b].push(a);
      }
    }
  }

  function search(set, startIndex) {
    if (set.length === 5)
      return set.reduce(function (s, x) {
        return s + x;
      }, 0);

    var last = set[set.length - 1];
    var candidates = compat[last];

    for (var i = 0; i < candidates.length; i++) {
      var p = candidates[i];
      if (p <= set[0]) continue;
      var ok = true;
      for (var j = 0; j < set.length; j++) {
        var q = set[j];
        if (!concatPrime(p, q) || !concatPrime(q, p)) {
          ok = false;
          break;
        }
      }
      if (!ok) continue;
      var next = set.slice();
      next.push(p);
      var res = search(next, i);
      if (res) return res;
    }
    return null;
  }

  for (var i = 0; i < primes.length; i++) {
    var p = primes[i];
    var res = search([p], i);
    if (res) return res;
  }

  return null;
}
