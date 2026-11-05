import { describe, expect, it } from 'vitest';

import { goldilocksZone } from '../2026-10-08.js';

describe('goldilocksZone', () => {
  it('goldilocksZone(1) should return [0.95, 1.37]', () => {
    expect(goldilocksZone(1)).toEqual([0.95, 1.37]);
  });

  it('goldilocksZone(0.5) should return [0.28, 0.41]', () => {
    expect(goldilocksZone(0.5)).toEqual([0.28, 0.41]);
  });

  it('goldilocksZone(6) should return [21.85, 31.51]', () => {
    expect(goldilocksZone(6)).toEqual([21.85, 31.51]);
  });

  it('goldilocksZone(3.7) should return [9.38, 13.52]', () => {
    expect(goldilocksZone(3.7)).toEqual([9.38, 13.52]);
  });

  it('goldilocksZone(20) should return [179.69, 259.13]', () => {
    expect(goldilocksZone(20)).toEqual([179.69, 259.13]);
  });
});
