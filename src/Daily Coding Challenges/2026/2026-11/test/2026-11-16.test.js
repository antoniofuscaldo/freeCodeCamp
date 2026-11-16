import { describe, expect, it } from 'vitest';

import { countRectangles } from '../2026-11-16.js';

describe('countRectangles', () => {
  it('countRectangles(1, 3) should return 6', () => {
    expect(countRectangles(1, 3)).toEqual(6);
  });

  it('countRectangles(3, 2) should return 18', () => {
    expect(countRectangles(3, 2)).toEqual(18);
  });

  it('countRectangles(1, 2) should return 3', () => {
    expect(countRectangles(1, 2)).toEqual(3);
  });

  it('countRectangles(5, 4) should return 150', () => {
    expect(countRectangles(5, 4)).toEqual(150);
  });

  it('countRectangles(11, 19) should return 12540', () => {
    expect(countRectangles(11, 19)).toEqual(12540);
  });
});
