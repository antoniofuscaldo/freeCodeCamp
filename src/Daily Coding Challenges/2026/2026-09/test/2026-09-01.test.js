import { describe, expect, it } from 'vitest';

import { tribonacciSequence } from '../2026-09-01.js';

describe('tribonacciSequence', () => {
  it('tribonacciSequence([0, 0, 1], 20) should return [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]', () => {
    expect(tribonacciSequence([0, 0, 1], 20)).toEqual([
      0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768,
      10609, 19513,
    ]);
  });

  it('tribonacciSequence([21, 32, 43], 1) should return [21]', () => {
    expect(tribonacciSequence([21, 32, 43], 1)).toEqual([21]);
  });

  it('tribonacciSequence([0, 0, 1], 0) should return []', () => {
    expect(tribonacciSequence([0, 0, 1], 0)).toEqual([]);
  });

  it('tribonacciSequence([10, 20, 30], 2) should return [10, 20]', () => {
    expect(tribonacciSequence([10, 20, 30], 2)).toEqual([10, 20]);
  });

  it('tribonacciSequence([10, 20, 30], 3) should return [10, 20, 30]', () => {
    expect(tribonacciSequence([10, 20, 30], 3)).toEqual([10, 20, 30]);
  });

  it('tribonacciSequence([123, 456, 789], 8) should return [123, 456, 789, 1368, 2613, 4770, 8751, 16134]', () => {
    expect(tribonacciSequence([123, 456, 789], 8)).toEqual([
      123, 456, 789, 1368, 2613, 4770, 8751, 16134,
    ]);
  });
});
