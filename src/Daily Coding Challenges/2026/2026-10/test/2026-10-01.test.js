import { describe, expect, it } from 'vitest';

import { toDecimal } from '../2026-10-01.js';

describe('toDecimal', () => {
  it('toDecimal("101") should return 5', () => {
    expect(toDecimal('101')).toEqual(5);
  });

  it('toDecimal("1010") should return 10', () => {
    expect(toDecimal('1010')).toEqual(10);
  });

  it('toDecimal("10010") should return 18', () => {
    expect(toDecimal('10010')).toEqual(18);
  });

  it('toDecimal("1010101") should return 85', () => {
    expect(toDecimal('1010101')).toEqual(85);
  });
});
