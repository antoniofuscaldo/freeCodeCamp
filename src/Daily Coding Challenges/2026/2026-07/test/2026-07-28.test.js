import { describe, expect, it } from 'vitest';

import { getContrastRating } from '../2026-07-28.js';

describe('getContrastRating', () => {
  it('getContrastRating("7.5", false) should return "AAA"', () => {
    expect(getContrastRating('7.5', false)).toEqual('AAA');
  });

  it('getContrastRating("4.8", false) should return "AA"', () => {
    expect(getContrastRating('4.8', false)).toEqual('AA');
  });

  it('getContrastRating("4.2", false) should return "Fail"', () => {
    expect(getContrastRating('4.2', false)).toEqual('Fail');
  });

  it('getContrastRating("4.5", true) should return "AAA"', () => {
    expect(getContrastRating('4.5', true)).toEqual('AAA');
  });

  it('getContrastRating("3.0", true) should return "AA"', () => {
    expect(getContrastRating('3.0', true)).toEqual('AA');
  });

  it('getContrastRating("2.7", false) should return "Fail"', () => {
    expect(getContrastRating('2.7', false)).toEqual('Fail');
  });
});
