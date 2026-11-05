import { describe, expect, it } from 'vitest';

import { isPerfectSquare } from '../2026-09-24.js';

describe('isPerfectSquare', () => {
  it('isPerfectSquare(9) should return true', () => {
    expect(isPerfectSquare(9)).toEqual(true);
  });

  it('isPerfectSquare(49) should return true', () => {
    expect(isPerfectSquare(49)).toEqual(true);
  });

  it('isPerfectSquare(1) should return true', () => {
    expect(isPerfectSquare(1)).toEqual(true);
  });

  it('isPerfectSquare(2) should return false', () => {
    expect(isPerfectSquare(2)).toEqual(false);
  });

  it('isPerfectSquare(99) should return false', () => {
    expect(isPerfectSquare(99)).toEqual(false);
  });

  it('isPerfectSquare(-9) should return false', () => {
    expect(isPerfectSquare(-9)).toEqual(false);
  });

  it('isPerfectSquare(0) should return true', () => {
    expect(isPerfectSquare(0)).toEqual(true);
  });

  it('isPerfectSquare(25281) should return true', () => {
    expect(isPerfectSquare(25281)).toEqual(true);
  });
});
