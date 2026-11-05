import { describe, expect, it } from 'vitest';

import { secondLargest } from '../2026-09-25.js';

describe('secondLargest', () => {
  it('secondLargest([1, 2, 3, 4]) should return 3', () => {
    expect(secondLargest([1, 2, 3, 4])).toEqual(3);
  });

  it('secondLargest([20, 139, 94, 67, 31]) should return 94', () => {
    expect(secondLargest([20, 139, 94, 67, 31])).toEqual(94);
  });

  it('secondLargest([2, 3, 4, 6, 6]) should return 4', () => {
    expect(secondLargest([2, 3, 4, 6, 6])).toEqual(4);
  });

  it('secondLargest([10, -17, 55.5, 44, 91, 0]) should return 55.5', () => {
    expect(secondLargest([10, -17, 55.5, 44, 91, 0])).toEqual(55.5);
  });

  it('secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]) should return 0', () => {
    expect(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0])).toEqual(0);
  });
});
