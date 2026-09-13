import { describe, expect, it } from 'vitest';

import { tooMuchScreenTime } from '../2026-09-12.js';

describe('tooMuchScreenTime', () => {
  it('tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]) should return false', () => {
    expect(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7])).toEqual(false);
  });

  it('tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]) should return false', () => {
    expect(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3])).toEqual(false);
  });

  it('tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]) should return false', () => {
    expect(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6])).toEqual(false);
  });

  it('tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]) should return true', () => {
    expect(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4])).toEqual(true);
  });

  it('tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]) should return true', () => {
    expect(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0])).toEqual(true);
  });

  it('tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]) should return true', () => {
    expect(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4])).toEqual(true);
  });

  it('tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]) should return true', () => {
    expect(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6])).toEqual(true);
  });
});
