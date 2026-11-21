import { describe, expect, it } from 'vitest';

import { lcm } from '../2026-11-21.js';

describe('lcm', () => {
  it('lcm(4, 6) should return 12', () => {
    expect(lcm(4, 6)).toEqual(12);
  });

  it('lcm(9, 6) should return 18', () => {
    expect(lcm(9, 6)).toEqual(18);
  });

  it('lcm(10, 100) should return 100', () => {
    expect(lcm(10, 100)).toEqual(100);
  });

  it('lcm(13, 17) should return 221', () => {
    expect(lcm(13, 17)).toEqual(221);
  });

  it('lcm(45, 70) should return 630', () => {
    expect(lcm(45, 70)).toEqual(630);
  });
});
