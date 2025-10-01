/**

Problem 43: Sub-string divisibility

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let  d1
  be the  1st
  digit,  d2
  be the  2nd
  digit, and so on. In this way, we note the following:

d2d3d4=406
  is divisible by 2
d3d4d5=063
  is divisible by 3
d4d5d6=635
  is divisible by 5
d5d6d7=357
  is divisible by 7
d6d7d8=572
  is divisible by 11
d7d8d9=728
  is divisible by 13
d8d9d10=289
  is divisible by 17
Find the sum of all 0 to n pandigital numbers with sub-strings fulfilling n - 2 of these divisibility properties.

Note: Pandigital numbers starting with 0 are to be considered in the result.

*/

function substringDivisibility(n) {
  const primes = [2, 3, 5, 7, 11, 13, 17].slice(0, Math.max(0, n - 2));
  const used = new Array(n + 1).fill(false);
  const arr = new Array(n + 1);
  let sum = 0;
  function dfs(pos) {
    if (pos === n + 1) {
      let value = 0;
      for (let i = 0; i <= n; i++) value = value * 10 + arr[i];
      sum += value;
      return;
    }
    for (let d = 0; d <= n; d++) {
      if (used[d]) continue;
      arr[pos] = d;
      used[d] = true;
      if (pos >= 3) {
        const i = pos - 3;
        if (i >= 0 && i < primes.length) {
          const val = arr[pos - 2] * 100 + arr[pos - 1] * 10 + arr[pos];
          if (val % primes[i] !== 0) {
            used[d] = false;
            continue;
          }
        }
      }
      dfs(pos + 1);
      used[d] = false;
    }
  }
  dfs(0);
  return sum;
}

substringDivisibility(5);
