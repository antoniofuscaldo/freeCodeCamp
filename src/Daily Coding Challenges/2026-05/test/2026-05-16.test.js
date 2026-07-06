import { describe, expect, it } from 'vitest';

import { getLongestChain } from '../2026-05-16.js';

describe('getLongestChain', () => {
  it("getLongestChain([[1, 2], [4, 5], [2, 3]]) should return [[1, 2], [2, 3]]", () => {
    expect(getLongestChain([[1, 2], [4, 5], [2, 3]])).toEqual([[1, 2], [2, 3]]);
  });

  it("getLongestChain([[2, 1], [4, 3], [5, 3]]) should return [[4, 3], [3, 5]]", () => {
    expect(getLongestChain([[2, 1], [4, 3], [5, 3]])).toEqual([[4, 3], [3, 5]]);
  });

  it("getLongestChain([[1, 2], [3, 4], [2, 3], [4, 0]]) should return [[1, 2], [2, 3], [3, 4], [4, 0]]", () => {
    expect(getLongestChain([[1, 2], [3, 4], [2, 3], [4, 0]])).toEqual([[1, 2], [2, 3], [3, 4], [4, 0]]);
  });

  it("getLongestChain([[6, 6], [6, 1], [1, 1], [0, 3], [2, 3], [4, 1], [5, 6]]) should return [[4, 1], [1, 1], [1, 6], [6, 6], [6, 5]]", () => {
    expect(getLongestChain([[6, 6], [6, 1], [1, 1], [0, 3], [2, 3], [4, 1], [5, 6]])).toEqual([[4, 1], [1, 1], [1, 6], [6, 6], [6, 5]]);
  });

  it("getLongestChain([[0, 4], [3, 3], [0, 3], [5, 6], [4, 5], [4, 2], [5, 5], [1, 2], [4, 4]]) should return [[3, 3], [3, 0], [0, 4], [4, 4], [4, 5], [5, 5], [5, 6]]", () => {
    expect(getLongestChain([[0, 4], [3, 3], [0, 3], [5, 6], [4, 5], [4, 2], [5, 5], [1, 2], [4, 4]])).toEqual([[3, 3], [3, 0], [0, 4], [4, 4], [4, 5], [5, 5], [5, 6]]);
  });
});
