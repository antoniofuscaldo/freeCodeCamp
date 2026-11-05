import { describe, expect, it } from 'vitest';

import { isBalanced } from '../2026-08-11.js';

describe('isBalanced', () => {
  it('isBalanced("racecar") should return true', () => {
    expect(isBalanced('racecar')).toEqual(true);
  });

  it('isBalanced("Lorem Ipsum") should return true', () => {
    expect(isBalanced('Lorem Ipsum')).toEqual(true);
  });

  it('isBalanced("Kitty Ipsum") should return false', () => {
    expect(isBalanced('Kitty Ipsum')).toEqual(false);
  });

  it('isBalanced("string") should return false', () => {
    expect(isBalanced('string')).toEqual(false);
  });

  it('isBalanced(" ") should return true', () => {
    expect(isBalanced(' ')).toEqual(true);
  });

  it('isBalanced("abcdefghijklmnopqrstuvwxyz") should return false', () => {
    expect(isBalanced('abcdefghijklmnopqrstuvwxyz')).toEqual(false);
  });

  it('isBalanced("123A#b!E&*456-o.U") should return true', () => {
    expect(isBalanced('123A#b!E&*456-o.U')).toEqual(true);
  });
});
