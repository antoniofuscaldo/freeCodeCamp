import { describe, expect, it } from 'vitest';

import { isGoldenRatio } from '../2026-07-20.js';

describe('isGoldenRatio', () => {
  it('isGoldenRatio(21, 34) should return true', () => {
    expect(isGoldenRatio(21, 34)).toEqual(true);
  });

  it('isGoldenRatio(15, 20) should return false', () => {
    expect(isGoldenRatio(15, 20)).toEqual(false);
  });

  it('isGoldenRatio(8, 13) should return true', () => {
    expect(isGoldenRatio(8, 13)).toEqual(true);
  });

  it('isGoldenRatio(10, 16) should return false', () => {
    expect(isGoldenRatio(10, 16)).toEqual(false);
  });

  it('isGoldenRatio(1618, 1000) should return true', () => {
    expect(isGoldenRatio(1618, 1000)).toEqual(true);
  });

  it('isGoldenRatio(88, 55) should return false', () => {
    expect(isGoldenRatio(88, 55)).toEqual(false);
  });
});
