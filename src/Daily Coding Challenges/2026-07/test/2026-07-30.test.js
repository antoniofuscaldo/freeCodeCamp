import { describe, expect, it } from 'vitest';

import { getContrastRating } from '../2026-07-30.js';

describe('getContrastRating', () => {
  it('getContrastRating([255, 255, 255], [0, 0, 0], false) should return "AAA"', () => {
    expect(getContrastRating([255, 255, 255], [0, 0, 0], false)).toEqual('AAA');
  });

  it('getContrastRating([215, 188, 188], [55, 55, 55], false) should return "AA"', () => {
    expect(getContrastRating([215, 188, 188], [55, 55, 55], false)).toEqual(
      'AA',
    );
  });

  it('getContrastRating([143, 144, 210], [46, 47, 61], false) should return "Fail"', () => {
    expect(getContrastRating([143, 144, 210], [46, 47, 61], false)).toEqual(
      'Fail',
    );
  });

  it('getContrastRating([167, 167, 210], [53, 10, 53], true) should return "AAA"', () => {
    expect(getContrastRating([167, 167, 210], [53, 10, 53], true)).toEqual(
      'AAA',
    );
  });

  it('getContrastRating([135, 147, 155], [60, 70, 90], true) should return "AA"', () => {
    expect(getContrastRating([135, 147, 155], [60, 70, 90], true)).toEqual(
      'AA',
    );
  });

  it('getContrastRating([125, 210, 195], [105, 130, 90], true) should return "Fail"', () => {
    expect(getContrastRating([125, 210, 195], [105, 130, 90], true)).toEqual(
      'Fail',
    );
  });
});
