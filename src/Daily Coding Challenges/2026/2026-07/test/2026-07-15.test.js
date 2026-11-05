import { describe, expect, it } from 'vitest';

import { chunkArray } from '../2026-07-15.js';

describe('chunkArray', () => {
  it('chunkArray([1, 2, 3, 4, 5, 6], 3) should return [[1, 2, 3], [4, 5, 6]]', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  it('chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2) should return [[1, "two"], [3, "four"], [5, "six"], [7, "eight"]]', () => {
    expect(chunkArray([1, 'two', 3, 'four', 5, 'six', 7, 'eight'], 2)).toEqual([
      [1, 'two'],
      [3, 'four'],
      [5, 'six'],
      [7, 'eight'],
    ]);
  });

  it('chunkArray([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  it('chunkArray(["a", "b", "c", "d", "e"], 1) should return [["a"], ["b"], ["c"], ["d"], ["e"]]', () => {
    expect(chunkArray(['a', 'b', 'c', 'd', 'e'], 1)).toEqual([
      ['a'],
      ['b'],
      ['c'],
      ['d'],
      ['e'],
    ]);
  });

  it('chunkArray([1, 2, 3], 5) should return [[1, 2, 3]]', () => {
    expect(chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });
});
