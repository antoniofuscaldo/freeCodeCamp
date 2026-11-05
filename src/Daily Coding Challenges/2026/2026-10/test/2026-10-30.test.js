import { describe, expect, it } from 'vitest';

import { nthPrime } from '../2026-10-30.js';

describe('nthPrime', () => {
  it('nthPrime(5) should return 11', () => {
    expect(nthPrime(5)).toEqual(11);
  });

  it('nthPrime(10) should return 29', () => {
    expect(nthPrime(10)).toEqual(29);
  });

  it('nthPrime(16) should return 53', () => {
    expect(nthPrime(16)).toEqual(53);
  });

  it('nthPrime(99) should return 523', () => {
    expect(nthPrime(99)).toEqual(523);
  });

  it('nthPrime(1000) should return 7919', () => {
    expect(nthPrime(1000)).toEqual(7919);
  });
});
