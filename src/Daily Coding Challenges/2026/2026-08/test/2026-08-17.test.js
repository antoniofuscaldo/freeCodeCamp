import { describe, expect, it } from 'vitest';

import { findTarget } from '../2026-08-17.js';

describe('findTarget', () => {
  it('findTarget([2, 7, 11, 15], 9) should return [0, 1]', () => {
    expect(findTarget([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('findTarget([3, 2, 4, 5], 6) should return [1, 2]', () => {
    expect(findTarget([3, 2, 4, 5], 6)).toEqual([1, 2]);
  });

  it('findTarget([1, 3, 5, 6, 7, 8], 15) should return [4, 5]', () => {
    expect(findTarget([1, 3, 5, 6, 7, 8], 15)).toEqual([4, 5]);
  });

  it('findTarget([1, 3, 5, 7], 14) should return "Target not found"', () => {
    expect(findTarget([1, 3, 5, 7], 14)).toEqual('Target not found');
  });
});
