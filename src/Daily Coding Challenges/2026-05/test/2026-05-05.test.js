import { describe, expect, it } from 'vitest';

import { isNarcissistic } from '../2026-05-05.js';

describe('isNarcissistic', () => {
  it('isNarcissistic(153) should return true', () => {
    expect(isNarcissistic(153)).toEqual(true);
  });

  it('isNarcissistic(154) should return false', () => {
    expect(isNarcissistic(154)).toEqual(false);
  });

  it('isNarcissistic(371) should return true', () => {
    expect(isNarcissistic(371)).toEqual(true);
  });

  it('isNarcissistic(512) should return false', () => {
    expect(isNarcissistic(512)).toEqual(false);
  });

  it('isNarcissistic(9) should return true', () => {
    expect(isNarcissistic(9)).toEqual(true);
  });

  it('isNarcissistic(11) should return false', () => {
    expect(isNarcissistic(11)).toEqual(false);
  });

  it('isNarcissistic(9474) should return true', () => {
    expect(isNarcissistic(9474)).toEqual(true);
  });

  it('isNarcissistic(6549) should return false', () => {
    expect(isNarcissistic(6549)).toEqual(false);
  });
});
