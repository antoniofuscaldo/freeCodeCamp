import { describe, expect, it } from 'vitest';

import { findLandingSpot } from '../2026-10-07.js';

describe('findLandingSpot', () => {
  it('findLandingSpot([[1, 0], [2, 0]]) should return [0, 1]', () => {
    expect(
      findLandingSpot([
        [1, 0],
        [2, 0],
      ]),
    ).toEqual([0, 1]);
  });

  it('findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]) should return [1, 1]', () => {
    expect(
      findLandingSpot([
        [9, 0, 3],
        [7, 0, 4],
        [8, 0, 5],
      ]),
    ).toEqual([1, 1]);
  });

  it('findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]) should return [2, 2]', () => {
    expect(
      findLandingSpot([
        [1, 2, 1],
        [0, 0, 2],
        [3, 0, 0],
      ]),
    ).toEqual([2, 2]);
  });

  it('findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]) should return [2, 1]', () => {
    expect(
      findLandingSpot([
        [9, 6, 0, 8],
        [7, 1, 1, 0],
        [3, 0, 3, 9],
        [8, 6, 0, 9],
      ]),
    ).toEqual([2, 1]);
  });
});
