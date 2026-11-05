import { describe, expect, it } from 'vitest';

import { isUnnaturalPrime } from '../2026-08-23.js';

describe('isUnnaturalPrime', () => {
  it('isUnnaturalPrime(1) should return false', () => {
    expect(isUnnaturalPrime(1)).toEqual(false);
  });

  it('isUnnaturalPrime(-1) should return false', () => {
    expect(isUnnaturalPrime(-1)).toEqual(false);
  });

  it('isUnnaturalPrime(19) should return true', () => {
    expect(isUnnaturalPrime(19)).toEqual(true);
  });

  it('isUnnaturalPrime(-23) should return true', () => {
    expect(isUnnaturalPrime(-23)).toEqual(true);
  });

  it('isUnnaturalPrime(0) should return false', () => {
    expect(isUnnaturalPrime(0)).toEqual(false);
  });

  it('isUnnaturalPrime(97) should return true', () => {
    expect(isUnnaturalPrime(97)).toEqual(true);
  });

  it('isUnnaturalPrime(-61) should return true', () => {
    expect(isUnnaturalPrime(-61)).toEqual(true);
  });

  it('isUnnaturalPrime(99) should return false', () => {
    expect(isUnnaturalPrime(99)).toEqual(false);
  });

  it('isUnnaturalPrime(-44) should return false', () => {
    expect(isUnnaturalPrime(-44)).toEqual(false);
  });
});
