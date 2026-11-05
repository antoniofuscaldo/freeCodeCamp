import { describe, expect, it } from 'vitest';

import { primeFactorization } from '../2026-06-20.js';

describe('primeFactorization', () => {
  it('primeFactorization(20) should return [2, 2, 5]', () => {
    expect(primeFactorization(20)).toEqual([2, 2, 5]);
  });

  it('primeFactorization(17) should return [17]', () => {
    expect(primeFactorization(17)).toEqual([17]);
  });

  it('primeFactorization(15) should return [3, 5]', () => {
    expect(primeFactorization(15)).toEqual([3, 5]);
  });

  it('primeFactorization(35) should return [5, 7]', () => {
    expect(primeFactorization(35)).toEqual([5, 7]);
  });

  it('primeFactorization(999) should return [3, 3, 3, 37]', () => {
    expect(primeFactorization(999)).toEqual([3, 3, 3, 37]);
  });

  it('primeFactorization(360) should return [2, 2, 2, 3, 3, 5]', () => {
    expect(primeFactorization(360)).toEqual([2, 2, 2, 3, 3, 5]);
  });

  it('primeFactorization(510510) should return [2, 3, 5, 7, 11, 13, 17]', () => {
    expect(primeFactorization(510510)).toEqual([2, 3, 5, 7, 11, 13, 17]);
  });
});
