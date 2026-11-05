import { describe, expect, it } from 'vitest';

import { lastLoadDate } from '../2026-06-07.js';

describe('lastLoadDate', () => {
  it('lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2]) should return 5', () => {
    expect(lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2])).toEqual(5);
  });

  it('lastLoadDate(16, [2, 3, 0, 3, 4, 2, 1]) should return 7', () => {
    expect(lastLoadDate(16, [2, 3, 0, 3, 4, 2, 1])).toEqual(7);
  });

  it('lastLoadDate(33, [5, 0, 4, 3, 3, 2]) should return 11', () => {
    expect(lastLoadDate(33, [5, 0, 4, 3, 3, 2])).toEqual(11);
  });

  it('lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2]) should return 12', () => {
    expect(lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2])).toEqual(12);
  });

  it('lastLoadDate(20, [13, 9, 12, 10, 8]) should return 1', () => {
    expect(lastLoadDate(20, [13, 9, 12, 10, 8])).toEqual(1);
  });
});
