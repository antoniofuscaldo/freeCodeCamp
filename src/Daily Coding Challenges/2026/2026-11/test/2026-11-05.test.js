import { describe, expect, it } from 'vitest';

import { buildMatrix } from '../2026-11-05.js';

describe('buildMatrix', () => {
  it('buildMatrix(2, 3) should return [[0, 0, 0], [0, 0, 0]]', () => {
    expect(buildMatrix(2, 3)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it('buildMatrix(3, 2) should return [[0, 0], [0, 0], [0, 0]]', () => {
    expect(buildMatrix(3, 2)).toEqual([
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
  });

  it('buildMatrix(4, 3) should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]', () => {
    expect(buildMatrix(4, 3)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it('buildMatrix(9, 1) should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]]', () => {
    expect(buildMatrix(9, 1)).toEqual([
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
    ]);
  });
});
