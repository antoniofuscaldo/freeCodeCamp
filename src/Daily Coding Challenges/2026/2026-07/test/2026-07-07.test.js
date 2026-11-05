import { describe, expect, it } from 'vitest';

import { roundToNearestMultiple } from '../2026-07-07.js';

describe('roundToNearestMultiple', () => {
  it('roundToNearestMultiple(5, 3) should return 6', () => {
    expect(roundToNearestMultiple(5, 3)).toEqual(6);
  });

  it('roundToNearestMultiple(17, 4) should return 16', () => {
    expect(roundToNearestMultiple(17, 4)).toEqual(16);
  });

  it('roundToNearestMultiple(43, 5) should return 45', () => {
    expect(roundToNearestMultiple(43, 5)).toEqual(45);
  });

  it('roundToNearestMultiple(38, 11) should return 33', () => {
    expect(roundToNearestMultiple(38, 11)).toEqual(33);
  });

  it('roundToNearestMultiple(93, 12) should return 96', () => {
    expect(roundToNearestMultiple(93, 12)).toEqual(96);
  });
});
