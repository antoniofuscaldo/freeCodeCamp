import { describe, expect, it } from 'vitest';

import { isValidNumber } from '../2026-08-12.js';

describe('isValidNumber', () => {
  it('isValidNumber("10101", 2) should return true', () => {
    expect(isValidNumber('10101', 2)).toEqual(true);
  });

  it('isValidNumber("10201", 2) should return false', () => {
    expect(isValidNumber('10201', 2)).toEqual(false);
  });

  it('isValidNumber("76543210", 8) should return true', () => {
    expect(isValidNumber('76543210', 8)).toEqual(true);
  });

  it('isValidNumber("9876543210", 8) should return false', () => {
    expect(isValidNumber('9876543210', 8)).toEqual(false);
  });

  it('isValidNumber("9876543210", 10) should return true', () => {
    expect(isValidNumber('9876543210', 10)).toEqual(true);
  });

  it('isValidNumber("ABC", 10) should return false', () => {
    expect(isValidNumber('ABC', 10)).toEqual(false);
  });

  it('isValidNumber("ABC", 16) should return true', () => {
    expect(isValidNumber('ABC', 16)).toEqual(true);
  });

  it('isValidNumber("Z", 36) should return true', () => {
    expect(isValidNumber('Z', 36)).toEqual(true);
  });

  it('isValidNumber("ABC", 20) should return true', () => {
    expect(isValidNumber('ABC', 20)).toEqual(true);
  });

  it('isValidNumber("4B4BA9", 16) should return true', () => {
    expect(isValidNumber('4B4BA9', 16)).toEqual(true);
  });

  it('isValidNumber("5G3F8F", 16) should return false', () => {
    expect(isValidNumber('5G3F8F', 16)).toEqual(false);
  });

  it('isValidNumber("5G3F8F", 17) should return true', () => {
    expect(isValidNumber('5G3F8F', 17)).toEqual(true);
  });

  it('isValidNumber("abc", 10) should return false', () => {
    expect(isValidNumber('abc', 10)).toEqual(false);
  });

  it('isValidNumber("abc", 16) should return true', () => {
    expect(isValidNumber('abc', 16)).toEqual(true);
  });

  it('isValidNumber("AbC", 16) should return true', () => {
    expect(isValidNumber('AbC', 16)).toEqual(true);
  });

  it('isValidNumber("z", 36) should return true', () => {
    expect(isValidNumber('z', 36)).toEqual(true);
  });
});
