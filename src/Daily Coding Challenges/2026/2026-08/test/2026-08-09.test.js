import { describe, expect, it } from 'vitest';

import { mixPaint } from '../2026-08-09.js';

describe('mixPaint', () => {
  it('mixPaint({ color: [250, 250, 250], fullness: 50 }, { color: [0, 0, 0], fullness: 50 }) should return [125, 125, 125]', () => {
    expect(
      mixPaint(
        { color: [250, 250, 250], fullness: 50 },
        { color: [0, 0, 0], fullness: 50 },
      ),
    ).toEqual([125, 125, 125]);
  });

  it('mixPaint({ color: [250, 250, 250], fullness: 80 }, { color: [0, 0, 0], fullness: 20 }) should return [200, 200, 200]', () => {
    expect(
      mixPaint(
        { color: [250, 250, 250], fullness: 80 },
        { color: [0, 0, 0], fullness: 20 },
      ),
    ).toEqual([200, 200, 200]);
  });

  it('mixPaint({ color: [100, 150, 200], fullness: 30 }, { color: [100, 150, 200], fullness: 70 }) should return [100, 150, 200]', () => {
    expect(
      mixPaint(
        { color: [100, 150, 200], fullness: 30 },
        { color: [100, 150, 200], fullness: 70 },
      ),
    ).toEqual([100, 150, 200]);
  });

  it('mixPaint({ color: [143, 143, 101], fullness: 45 }, { color: [100, 204, 204], fullness: 90 }) should return [114, 184, 170]', () => {
    expect(
      mixPaint(
        { color: [143, 143, 101], fullness: 45 },
        { color: [100, 204, 204], fullness: 90 },
      ),
    ).toEqual([114, 184, 170]);
  });

  it('mixPaint({ color: [15, 134, 249], fullness: 29 }, { color: [97, 178, 55], fullness: 54 }) should return [68, 163, 123]', () => {
    expect(
      mixPaint(
        { color: [15, 134, 249], fullness: 29 },
        { color: [97, 178, 55], fullness: 54 },
      ),
    ).toEqual([68, 163, 123]);
  });
});
