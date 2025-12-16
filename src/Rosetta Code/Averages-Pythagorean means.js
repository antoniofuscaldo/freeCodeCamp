/**

Averages/Pythagorean means

Compute all three of the Pythagorean means of the set of integers  1
  through  10
  (inclusive).

Show that  A(x1,…,xn)≥G(x1,…,xn)≥H(x1,…,xn)
  for this set of positive integers.

The most common of the three means, the arithmetic mean, is the sum of the list divided by its length:
A(x1,…,xn)=x1+⋯+xnn
 
The geometric mean is the  n
 th root of the product of the list:
G(x1,…,xn)=x1⋯xn‾‾‾‾‾‾‾√n
 
The harmonic mean is  n
  divided by the sum of the reciprocal of each item in the list:
H(x1,…,xn)=n1x1+⋯+1xn
 
When writing your function, assume the input is an ordered array of all-inclusive numbers.

For the answer, please output an object in the following format:

{
  values: {
    Arithmetic: 5.5,
    Geometric: 4.528728688116765,
    Harmonic: 3.414171521474055
  },
  test: 'is A >= G >= H ? yes'
}

*/

function pythagoreanMeans(rangeArr) {
  const n = rangeArr.length,
    arithmetic = rangeArr.reduce((a, b) => a + b, 0) / n,
    geometric = rangeArr.reduce((a, b) => a * b, 1) ** (1 / n),
    harmonic = n / rangeArr.reduce((a, b) => a + 1 / b, 0),
    test =
      arithmetic >= geometric && geometric >= harmonic
        ? 'is A >= G >= H ? yes'
        : 'is A >= G >= H ? no';

  return {
    values: {
      Arithmetic: arithmetic,
      Geometric: geometric,
      Harmonic: harmonic,
    },
    test,
  };
}
