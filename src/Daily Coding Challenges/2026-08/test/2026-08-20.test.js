import { describe, expect, it } from 'vitest';

import { squaresWithThree } from '../2026-08-20.js';

describe('squaresWithThree', () => {
  it('squaresWithThree(1) should return 0', () => {
    expect(squaresWithThree(1)).toEqual(0);
  });

  it('squaresWithThree(10) should return 1', () => {
    expect(squaresWithThree(10)).toEqual(1);
  });

  it('squaresWithThree(100) should return 19', () => {
    expect(squaresWithThree(100)).toEqual(19);
  });

  it('squaresWithThree(1000) should return 326', () => {
    expect(squaresWithThree(1000)).toEqual(326);
  });

  it('squaresWithThree(10000) should return 4531', () => {
    expect(squaresWithThree(10000)).toEqual(4531);
  });
});
