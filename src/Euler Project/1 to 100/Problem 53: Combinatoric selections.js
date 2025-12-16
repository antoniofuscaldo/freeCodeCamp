/**

Problem 53: Combinatoric selections

There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
In combinatorics, we use the notation,  (53)=10
 

In general,  (nr)=n!r!(n−r)!
 , where  r≤n
 ,  n!=n×(n−1)×...×3×2×1
 , and  0!=1
 .

It is not until  n=23
 , that a value exceeds one-million:  (2310)=1144066
 .

How many, not necessarily distinct, values of  (nr)
  for  1≤n≤100
 , are greater than one-million?

*/

function combinatoricSelections(limit) {
  if (!Number.isFinite(limit) || limit < 0) return 0;
  const L = BigInt(Math.floor(limit));
  let total = 0;
  for (let n = 1; n <= 100; n++) {
    let c = 1n;
    for (let r = 1; r <= Math.floor(n / 2); r++) {
      c = (c * BigInt(n - r + 1)) / BigInt(r);
      if (c > L) {
        total += n - 2 * r + 1;
        break;
      }
    }
  }
  return total;
}

combinatoricSelections(1000000);
