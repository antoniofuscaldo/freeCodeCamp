/**

Amicable pairs

Two integers  N
  and  M
  are said to be amicable pairs if  N≠M
  and the sum of the proper divisors of  N
  ( sum(propDivs(N))
 )  =M
  as well as  sum(propDivs(M))=N
 .

Example:

1184 and 1210 are an amicable pair, with proper divisors:

1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 and
1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 respectively.
The sum of the divisors for the first value, 1184, is 1210 and the sum of the divisors for the second value, 1210, is 1184.

Calculate and show here the Amicable pairs below 20,000 (there are eight).

*/

function amicablePairsUpTo(maxNum) {
  function sumProperDivisors(n) {
    if (n === 1) return 0;
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        sum += i;
        if (i !== n / i) sum += n / i;
      }
    }
    return sum;
  }

  const pairs = [];
  for (let n = 2; n <= maxNum; n++) {
    const m = sumProperDivisors(n);
    if (m > n && m <= maxNum) {
      if (sumProperDivisors(m) === n) {
        pairs.push([n, m]);
      }
    }
  }
  return pairs;
}
