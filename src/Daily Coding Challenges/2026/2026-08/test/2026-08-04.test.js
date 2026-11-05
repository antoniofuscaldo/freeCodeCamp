import { describe, expect, it } from 'vitest';

import { calculateHandicap } from '../2026-08-04.js';

describe('calculateHandicap', () => {
  it('calculateHandicap([72, 72, 72], [72, 72, 72]) should return 0', () => {
    expect(calculateHandicap([72, 72, 72], [72, 72, 72])).toEqual(0);
  });

  it('calculateHandicap([80, 76, 78, 78], [72, 72, 72, 72]) should return 6', () => {
    expect(calculateHandicap([80, 76, 78, 78], [72, 72, 72, 72])).toEqual(6);
  });

  it('calculateHandicap([42, 45, 46, 44], [36, 36, 36, 36]) should return 8.3', () => {
    expect(calculateHandicap([42, 45, 46, 44], [36, 36, 36, 36])).toEqual(8.3);
  });

  it('calculateHandicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71]) should return 8.8', () => {
    expect(
      calculateHandicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71]),
    ).toEqual(8.8);
  });

  it('calculateHandicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]) should return 11.7', () => {
    expect(
      calculateHandicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]),
    ).toEqual(11.7);
  });
});
