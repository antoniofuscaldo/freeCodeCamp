import { describe, expect, it } from 'vitest';

import { isValidCard } from '../2026-06-14.js';

describe('isValidCard', () => {
  it('isValidCard("4532015112830366") should return true', () => {
    expect(isValidCard('4532015112830366')).toEqual(true);
  });

  it('isValidCard("5425233430109903") should return true', () => {
    expect(isValidCard('5425233430109903')).toEqual(true);
  });

  it('isValidCard("371449635398431") should return true', () => {
    expect(isValidCard('371449635398431')).toEqual(true);
  });

  it('isValidCard("6011111111111117") should return true', () => {
    expect(isValidCard('6011111111111117')).toEqual(true);
  });

  it('isValidCard("4532015112830367") should return false', () => {
    expect(isValidCard('4532015112830367')).toEqual(false);
  });

  it('isValidCard("1234567890123456") should return false', () => {
    expect(isValidCard('1234567890123456')).toEqual(false);
  });

  it('isValidCard("4532015112830368") should return false', () => {
    expect(isValidCard('4532015112830368')).toEqual(false);
  });
});
