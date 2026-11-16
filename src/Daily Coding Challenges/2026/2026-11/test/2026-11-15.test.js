import { describe, expect, it } from 'vitest';

import { gcd } from '../2026-11-15.js';

describe('gcd', () => {
  it('gcd(4, 6) should return 2', () => {
    expect(gcd(4, 6)).toEqual(2);
  });

  it('gcd(20, 15) should return 5', () => {
    expect(gcd(20, 15)).toEqual(5);
  });

  it('gcd(13, 17) should return 1', () => {
    expect(gcd(13, 17)).toEqual(1);
  });

  it('gcd(654, 456) should return 6', () => {
    expect(gcd(654, 456)).toEqual(6);
  });

  it('gcd(3456, 4320) should return 864', () => {
    expect(gcd(3456, 4320)).toEqual(864);
  });
});
