import { describe, expect, it } from 'vitest';

import { sumOfDifferences } from '../2026-05-26.js';

describe('sumOfDifferences', () => {
  it('sumOfDifferences([1, 3, 4]) should return 3', () => {
    expect(sumOfDifferences([1, 3, 4])).toEqual(3);
  });

  it('sumOfDifferences([5, -3, 3, 9, 10]) should return 5', () => {
    expect(sumOfDifferences([5, -3, 3, 9, 10])).toEqual(5);
  });

  it('sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7]) should return -16', () => {
    expect(sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7])).toEqual(-16);
  });

  it('sumOfDifferences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75]) should return 25', () => {
    expect(
      sumOfDifferences([
        50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75,
      ]),
    ).toEqual(25);
  });
});
