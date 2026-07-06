import { describe, expect, it } from 'vitest';

import { zipStrings } from '../2026-05-20.js';

describe('zipStrings', () => {
  it('zipStrings("abc", "123") should return "a1b2c3"', () => {
    expect(zipStrings('abc', '123')).toEqual('a1b2c3');
  });

  it('zipStrings("acegikmoqsuwy", "bdfhjlnprtvxz") should return "abcdefghijklmnopqrstuvwxyz"', () => {
    expect(zipStrings('acegikmoqsuwy', 'bdfhjlnprtvxz')).toEqual(
      'abcdefghijklmnopqrstuvwxyz',
    );
  });

  it('zipStrings("day", "night") should return "dnaiyght"', () => {
    expect(zipStrings('day', 'night')).toEqual('dnaiyght');
  });

  it('zipStrings("python", "javascript") should return "pjyatvhaosncript"', () => {
    expect(zipStrings('python', 'javascript')).toEqual('pjyatvhaosncript');
  });

  it('zipStrings("feCdCm", "reoeap") should return "freeCodeCamp"', () => {
    expect(zipStrings('feCdCm', 'reoeap')).toEqual('freeCodeCamp');
  });
});
