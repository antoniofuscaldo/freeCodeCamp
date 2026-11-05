import { describe, expect, it } from 'vitest';

import { solveMagicSquare } from '../2026-08-01.js';

describe('solveMagicSquare', () => {
  it('solveMagicSquare([[2, 7, 6], [9, 0, 1], [4, 3, 8]]) should return 5', () => {
    expect(
      solveMagicSquare([
        [2, 7, 6],
        [9, 0, 1],
        [4, 3, 8],
      ]),
    ).toEqual(5);
  });

  it('solveMagicSquare([[0, 14, 12], [18, 10, 2], [8, 6, 16]]) should return 4', () => {
    expect(
      solveMagicSquare([
        [0, 14, 12],
        [18, 10, 2],
        [8, 6, 16],
      ]),
    ).toEqual(4);
  });

  it('solveMagicSquare([[12, 17, 16], [19, 0, 10], [14, 13, 18]]) should return "impossible"', () => {
    expect(
      solveMagicSquare([
        [12, 17, 16],
        [19, 0, 10],
        [14, 13, 18],
      ]),
    ).toEqual('impossible');
  });

  it('solveMagicSquare([[15, 35, 31], [43, 27, 11], [23, 19, 0]]) should return 39', () => {
    expect(
      solveMagicSquare([
        [15, 35, 31],
        [43, 27, 11],
        [23, 19, 0],
      ]),
    ).toEqual(39);
  });

  it('solveMagicSquare([[26, 41, 14], [47, 35, 0], [32, 29, 44]]) should return "impossible"', () => {
    expect(
      solveMagicSquare([
        [26, 41, 14],
        [47, 35, 0],
        [32, 29, 44],
      ]),
    ).toEqual('impossible');
  });
});
