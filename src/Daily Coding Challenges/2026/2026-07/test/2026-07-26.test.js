import { describe, expect, it } from 'vitest';

import { letterDistance } from '../2026-07-26.js';

describe('letterDistance', () => {
  it('letterDistance("abc", "bcd") should return 3', () => {
    expect(letterDistance('abc', 'bcd')).toEqual(3);
  });

  it('letterDistance("abc", "xyz") should return 9', () => {
    expect(letterDistance('abc', 'xyz')).toEqual(9);
  });

  it('letterDistance("encrypt", "decrypt") should return 10', () => {
    expect(letterDistance('encrypt', 'decrypt')).toEqual(10);
  });

  it('letterDistance("algorithm", "codeblock") should return 43', () => {
    expect(letterDistance('algorithm', 'codeblock')).toEqual(43);
  });

  it('letterDistance("lobster", "penguin") should return 47', () => {
    expect(letterDistance('lobster', 'penguin')).toEqual(47);
  });

  it('letterDistance("alligator", "crocodile") should return 55', () => {
    expect(letterDistance('alligator', 'crocodile')).toEqual(55);
  });
});
