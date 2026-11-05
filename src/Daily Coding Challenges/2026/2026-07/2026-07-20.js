/**

Golden Ratio

Given two numbers, determine if their ratio approximates the golden ratio.

Use a golden ratio of 1.618
Allow a tolerance of 0.01

Tests:
Waiting:1. isGoldenRatio(21, 34) should return true.
Waiting:2. isGoldenRatio(15, 20) should return false.
Waiting:3. isGoldenRatio(8, 13) should return true.
Waiting:4. isGoldenRatio(10, 16) should return false.
Waiting:5. isGoldenRatio(1618, 1000) should return true.
Waiting:6. isGoldenRatio(88, 55) should return false.

*/

export function isGoldenRatio(a, b) {
  const GR = 1.618;
  const tol = 0.01;

  const r1 = a / b;
  const r2 = b / a;

  return Math.abs(r1 - GR) <= tol || Math.abs(r2 - GR) <= tol;
}
