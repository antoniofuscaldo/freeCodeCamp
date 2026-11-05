import { describe, expect, it } from 'vitest';

import { sumOfSquares } from '../2026-08-19.js';

describe('sumOfSquares', () => {
  it('sumOfSquares(5) should return 55', () => {
    expect(sumOfSquares(5)).toEqual(55);
  });

  it('sumOfSquares(10) should return 385', () => {
    expect(sumOfSquares(10)).toEqual(385);
  });

  it('sumOfSquares(25) should return 5525', () => {
    expect(sumOfSquares(25)).toEqual(5525);
  });

  it('sumOfSquares(500) should return 41791750', () => {
    expect(sumOfSquares(500)).toEqual(41791750);
  });

  it('sumOfSquares(1000) should return 333833500', () => {
    expect(sumOfSquares(1000)).toEqual(333833500);
  });
});
