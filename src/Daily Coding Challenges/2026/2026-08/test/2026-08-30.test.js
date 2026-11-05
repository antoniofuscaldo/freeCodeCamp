import { describe, expect, it } from 'vitest';

import { findDuplicates } from '../2026-08-30.js';

describe('findDuplicates', () => {
  it('findDuplicates([1, 2, 3, 4, 5]) should return []', () => {
    expect(findDuplicates([1, 2, 3, 4, 5])).toEqual([]);
  });

  it('findDuplicates([1, 2, 3, 4, 1, 2]) should return [1, 2]', () => {
    expect(findDuplicates([1, 2, 3, 4, 1, 2])).toEqual([1, 2]);
  });

  it('findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]) should return [-6, 0, 2, 4, 5, 23]', () => {
    expect(
      findDuplicates([
        2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4,
      ]),
    ).toEqual([-6, 0, 2, 4, 5, 23]);
  });
});
