import { describe, expect, it } from 'vitest';

import { hexToDecimal } from '../2026-10-11.js';

describe('hexToDecimal', () => {
  it('hexToDecimal("A") should return 10', () => {
    expect(hexToDecimal('A')).toEqual(10);
  });

  it('hexToDecimal("15") should return 21', () => {
    expect(hexToDecimal('15')).toEqual(21);
  });

  it('hexToDecimal("2E") should return 46', () => {
    expect(hexToDecimal('2E')).toEqual(46);
  });

  it('hexToDecimal("FF") should return 255', () => {
    expect(hexToDecimal('FF')).toEqual(255);
  });

  it('hexToDecimal("A3F") should return 2623', () => {
    expect(hexToDecimal('A3F')).toEqual(2623);
  });
});
