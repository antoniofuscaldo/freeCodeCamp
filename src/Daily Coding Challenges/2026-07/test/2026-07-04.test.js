import { describe, expect, it } from 'vitest';

import { kaprekar } from '../2026-07-04.js';

describe('kaprekar', () => {
  it('kaprekar(1234) should return 3', () => {
    expect(kaprekar(1234)).toBe(3);
  });

  it('kaprekar(2025) should return 6', () => {
    expect(kaprekar(2025)).toBe(6);
  });

  it('kaprekar(7173) should return 4', () => {
    expect(kaprekar(7173)).toBe(4);
  });

  it('kaprekar(3164) should return 7', () => {
    expect(kaprekar(3164)).toBe(7);
  });

  it('kaprekar(8082) should return 2', () => {
    expect(kaprekar(8082)).toBe(2);
  });
});
