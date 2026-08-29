import { describe, expect, it } from 'vitest';

import { burnCandles } from '../2026-08-29.js';

describe('burnCandles', () => {
  it('burnCandles(7, 2) should return 13', () => {
    expect(burnCandles(7, 2)).toEqual(13);
  });

  it('burnCandles(10, 5) should return 12', () => {
    expect(burnCandles(10, 5)).toEqual(12);
  });

  it('burnCandles(20, 3) should return 29', () => {
    expect(burnCandles(20, 3)).toEqual(29);
  });

  it('burnCandles(17, 4) should return 22', () => {
    expect(burnCandles(17, 4)).toEqual(22);
  });

  it('burnCandles(2345, 3) should return 3517', () => {
    expect(burnCandles(2345, 3)).toEqual(3517);
  });
});
