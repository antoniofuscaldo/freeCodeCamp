import { describe, expect, it } from 'vitest';

import { findOffender } from '../2026-05-13.js';

describe('findOffender', () => {
  it("findOffender([1, 6, 2, 3, 4, 5]) should return 1", () => {
    expect(findOffender([1, 6, 2, 3, 4, 5])).toEqual(1);
  });

  it("findOffender([1, 2, 3, 5, 4, 5]) should return 3", () => {
    expect(findOffender([1, 2, 3, 5, 4, 5])).toEqual(3);
  });

  it("findOffender([2, 1]) should return 0", () => {
    expect(findOffender([2, 1])).toEqual(0);
  });

  it("findOffender([2, 4, 1, 6, 8]) should return 2", () => {
    expect(findOffender([2, 4, 1, 6, 8])).toEqual(2);
  });

  it("findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91]) should return 6", () => {
    expect(findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91])).toEqual(6);
  });
});
