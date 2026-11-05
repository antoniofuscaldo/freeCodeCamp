import { describe, expect, it } from 'vitest';

import { exactChange } from '../2026-07-10.js';

describe('exactChange', () => {
  it('exactChange(3) should return 1', () => {
    expect(exactChange(3)).toEqual(1);
  });

  it('exactChange(9) should return 2', () => {
    expect(exactChange(9)).toEqual(2);
  });

  it('exactChange(17) should return 6', () => {
    expect(exactChange(17)).toEqual(6);
  });

  it('exactChange(39) should return 24', () => {
    expect(exactChange(39)).toEqual(24);
  });

  it('exactChange(61) should return 73', () => {
    expect(exactChange(61)).toEqual(73);
  });

  it('exactChange(99) should return 213', () => {
    expect(exactChange(99)).toEqual(213);
  });
});
