import { describe, expect, it } from 'vitest';

import { shiftArray } from '../2026-11-13.js';

describe('shiftArray', () => {
  it('shiftArray([1, 2, 3], 1) should return [2, 3, 1]', () => {
    expect(shiftArray([1, 2, 3], 1)).toEqual([2, 3, 1]);
  });

  it('shiftArray([1, 2, 3], -1) should return [3, 1, 2]', () => {
    expect(shiftArray([1, 2, 3], -1)).toEqual([3, 1, 2]);
  });

  it('shiftArray(["alpha", "bravo", "charlie"], 5) should return ["charlie", "alpha", "bravo"]', () => {
    expect(shiftArray(['alpha', 'bravo', 'charlie'], 5)).toEqual([
      'charlie',
      'alpha',
      'bravo',
    ]);
  });

  it('shiftArray(["alpha", "bravo", "charlie"], -11) should return ["bravo", "charlie", "alpha"]', () => {
    expect(shiftArray(['alpha', 'bravo', 'charlie'], -11)).toEqual([
      'bravo',
      'charlie',
      'alpha',
    ]);
  });

  it('shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15) should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4]', () => {
    expect(shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15)).toEqual([
      5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
    ]);
  });
});
