/**

Problem 52: Permuted multiples

It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, such that multiplied by integers  {2,3,…,n}
 , contain the same digits.

*/

function permutedMultiples(n) {
  function sameDigits(a, b) {
    return a.toString().split('').sort().join('') === b.toString().split('').sort().join('');
  }

  let x = 1;
  while (true) {
    let ok = true;
    for (let k = 2; k <= n; k++) {
      if (!sameDigits(x, x * k)) {
        ok = false;
        break;
      }
    }
    if (ok) return x;
    x++;
  }
}

permutedMultiples(2);
