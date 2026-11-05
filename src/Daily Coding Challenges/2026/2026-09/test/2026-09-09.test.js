import { describe, expect, it } from 'vitest';

import { allUnique } from '../2026-09-09.js';

describe('allUnique', () => {
  it('allUnique("abc") should return true', () => {
    expect(allUnique('abc')).toEqual(true);
  });

  it('allUnique("aA") should return true', () => {
    expect(allUnique('aA')).toEqual(true);
  });

  it('allUnique("QwErTy123!@") should return true', () => {
    expect(allUnique('QwErTy123!@')).toEqual(true);
  });

  it('allUnique("~!@#$%^&*()_+") should return true', () => {
    expect(allUnique('~!@#$%^&*()_+')).toEqual(true);
  });

  it('allUnique("hello") should return false', () => {
    expect(allUnique('hello')).toEqual(false);
  });

  it('allUnique("freeCodeCamp") should return false', () => {
    expect(allUnique('freeCodeCamp')).toEqual(false);
  });

  it('allUnique("!@#*$%^&*()aA") should return false', () => {
    expect(allUnique('!@#*$%^&*()aA')).toEqual(false);
  });
});
