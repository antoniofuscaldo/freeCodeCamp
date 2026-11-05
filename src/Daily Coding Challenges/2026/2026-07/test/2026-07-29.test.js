import { describe, expect, it } from 'vitest';

import { getContrastRating } from '../2026-07-29.js';

describe('getContrastRating', () => {
  it('getContrastRating(1.0, 0.0, false) should return "AAA"', () => {
    expect(getContrastRating(1.0, 0.0, false)).toEqual('AAA');
  });

  it('getContrastRating(0.9015, 0.1364, false) should return "AA"', () => {
    expect(getContrastRating(0.9015, 0.1364, false)).toEqual('AA');
  });

  it('getContrastRating(0.8965, 0.1628, false) should return "Fail"', () => {
    expect(getContrastRating(0.8965, 0.1628, false)).toEqual('Fail');
  });

  it('getContrastRating(0.7469, 0.0957, true) should return "AAA"', () => {
    expect(getContrastRating(0.7469, 0.0957, true)).toEqual('AAA');
  });

  it('getContrastRating(0.7489, 0.2018, true) should return "AA"', () => {
    expect(getContrastRating(0.7489, 0.2018, true)).toEqual('AA');
  });

  it('getContrastRating(0.6571, 0.1974, true) should return "Fail"', () => {
    expect(getContrastRating(0.6571, 0.1974, true)).toEqual('Fail');
  });
});
