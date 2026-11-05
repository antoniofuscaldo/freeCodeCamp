import { describe, expect, it } from 'vitest';

import { getMaxProfit } from '../2026-07-02.js';

describe('getMaxProfit', () => {
  it('getMaxProfit([5, 6], 50) should return "10.00"', () => {
    expect(getMaxProfit([5, 6], 50)).toBe('10.00');
  });

  it('getMaxProfit([8, 2, 5, 10], 20) should return "80.00"', () => {
    expect(getMaxProfit([8, 2, 5, 10], 20)).toBe('80.00');
  });

  it('getMaxProfit([4, 5, 3, 6], 20) should return "18.00"', () => {
    expect(getMaxProfit([4, 5, 3, 6], 20)).toBe('18.00');
  });

  it('getMaxProfit([54.40, 51.22, 53.99, 50.28, 53.01, 52.84], 200) should return "8.31"', () => {
    expect(getMaxProfit([54.4, 51.22, 53.99, 50.28, 53.01, 52.84], 200)).toBe(
      '8.31',
    );
  });

  it('getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80) should return "0.00"', () => {
    expect(getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80)).toBe('0.00');
  });

  it('getMaxProfit([121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33], 1230.25) should return "73.80"', () => {
    expect(
      getMaxProfit(
        [121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33],
        1230.25,
      ),
    ).toBe('73.80');
  });
});
