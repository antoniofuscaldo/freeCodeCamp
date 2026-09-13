import { describe, expect, it } from 'vitest';

import { findMissingNumbers } from '../2026-09-13.js';

describe('findMissingNumbers', () => {
  it('findMissingNumbers([1, 3, 5]) should return [2, 4]', () => {
    expect(findMissingNumbers([1, 3, 5])).toEqual([2, 4]);
  });

  it('findMissingNumbers([1, 2, 3, 4, 5]) should return []', () => {
    expect(findMissingNumbers([1, 2, 3, 4, 5])).toEqual([]);
  });

  it('findMissingNumbers([1, 10]) should return [2, 3, 4, 5, 6, 7, 8, 9]', () => {
    expect(findMissingNumbers([1, 10])).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('findMissingNumbers([10, 1, 10, 1, 10, 1]) should return [2, 3, 4, 5, 6, 7, 8, 9]', () => {
    expect(findMissingNumbers([10, 1, 10, 1, 10, 1])).toEqual([
      2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it('findMissingNumbers([3, 1, 4, 1, 5, 9]) should return [2, 6, 7, 8]', () => {
    expect(findMissingNumbers([3, 1, 4, 1, 5, 9])).toEqual([2, 6, 7, 8]);
  });

  it('findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]) should return [11]', () => {
    expect(
      findMissingNumbers([
        1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4,
      ]),
    ).toEqual([11]);
  });
});
