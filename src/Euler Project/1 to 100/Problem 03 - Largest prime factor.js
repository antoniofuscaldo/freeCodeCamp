/**

Problem 3: Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

*/

function largestPrimeFactor(number) {
  let factor = 2;
  while (number > 1) {
    if (number % factor === 0) {
      number /= factor;
    } else {
      factor++;
    }
  }
  return factor;
}

largestPrimeFactor(13195);
