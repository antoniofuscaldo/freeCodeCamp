import { describe, expect, it } from 'vitest';

import { fibonacciSequence } from '../2026-08-13.js';

describe('fibonacciSequence', () => {
  it('fibonacciSequence([0, 1], 20) should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]', () => {
    expect(fibonacciSequence([0, 1], 20)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ]);
  });

  it('fibonacciSequence([21, 32], 1) should return [21]', () => {
    expect(fibonacciSequence([21, 32], 1)).toEqual([21]);
  });

  it('fibonacciSequence([0, 1], 0) should return []', () => {
    expect(fibonacciSequence([0, 1], 0)).toEqual([]);
  });

  it('fibonacciSequence([10, 20], 2) should return [10, 20]', () => {
    expect(fibonacciSequence([10, 20], 2)).toEqual([10, 20]);
  });

  it('fibonacciSequence([123456789, 987654321], 5) should return [123456789, 987654321, 1111111110, 2098765431, 3209876541]', () => {
    expect(fibonacciSequence([123456789, 987654321], 5)).toEqual([
      123456789, 987654321, 1111111110, 2098765431, 3209876541,
    ]);
  });
});
