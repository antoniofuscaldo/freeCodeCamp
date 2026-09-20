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
