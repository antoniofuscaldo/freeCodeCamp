function fiboEvenSum(n) {
  let a = 1,
    b = 2,
    sum = 0;
  while (b <= n) {
    if (b % 2 === 0) sum += b;
    const temp = a + b;
    a = b;
    b = temp;
  }
  return sum;
}
