import { describe, expect, it } from 'vitest';

import { factorial } from '../2026-08-18.js';

describe('factorial', () => {
  it('factorial(0) should return 1', () => {
    expect(factorial(0)).toEqual(1);
  });

  it('factorial(5) should return 120', () => {
    expect(factorial(5)).toEqual(120);
  });

  it('factorial(20) should return 2432902008176640000', () => {
    expect(factorial(20)).toEqual(2432902008176640000);
  });
});
