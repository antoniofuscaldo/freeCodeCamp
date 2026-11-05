import { describe, expect, it } from 'vitest';

import { calculateBmi } from '../2026-06-23.js';

describe('calculateBmi', () => {
  it('calculateBmi(180, 70) should return 25.8', () => {
    expect(calculateBmi(180, 70)).toEqual(25.8);
  });

  it('calculateBmi(140, 64) should return 24.0', () => {
    expect(calculateBmi(140, 64)).toEqual(24.0);
  });

  it('calculateBmi(160, 76) should return 19.5', () => {
    expect(calculateBmi(160, 76)).toEqual(19.5);
  });

  it('calculateBmi(200, 60) should return 39.1', () => {
    expect(calculateBmi(200, 60)).toEqual(39.1);
  });

  it('calculateBmi(150, 68) should return 22.8', () => {
    expect(calculateBmi(150, 68)).toEqual(22.8);
  });
});
