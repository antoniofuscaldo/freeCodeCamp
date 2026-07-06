import { describe, expect, it } from 'vitest';

import { convertParsecs } from '../2026-05-04.js';

describe('convertParsecs', () => {
  it('convertParsecs(1) should return 2', () => {
    expect(convertParsecs(1)).toEqual(2);
  });

  it('convertParsecs(2) should return 6', () => {
    expect(convertParsecs(2)).toEqual(6);
  });

  it('convertParsecs(31) should return 62', () => {
    expect(convertParsecs(31)).toEqual(62);
  });

  it('convertParsecs(88) should return 264', () => {
    expect(convertParsecs(88)).toEqual(264);
  });

  it('convertParsecs(17) should return 34', () => {
    expect(convertParsecs(17)).toEqual(34);
  });

  it('convertParsecs(14) should return 42', () => {
    expect(convertParsecs(14)).toEqual(42);
  });
});
