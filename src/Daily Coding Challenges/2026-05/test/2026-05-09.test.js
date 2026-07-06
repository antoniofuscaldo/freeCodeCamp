import { describe, expect, it } from 'vitest';

import { transpose } from '../2026-05-09.js';

describe('transpose', () => {
  it('transpose([[1, 2, 3], [4, 5, 6]]) should return [[1, 4], [2, 5], [3, 6]]', () => {
    expect(
      transpose([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });

  it('transpose([[1, 2], [3, 4], [5, 6]]) should return [[1, 3, 5], [2, 4, 6]]', () => {
    expect(
      transpose([
        [1, 2],
        [3, 4],
        [5, 6],
      ]),
    ).toEqual([
      [1, 3, 5],
      [2, 4, 6],
    ]);
  });

  it('transpose([[1, 2], [3, 4], [5, 6], [7, 8]]) should return [[1, 3, 5, 7], [2, 4, 6, 8]]', () => {
    expect(
      transpose([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ]),
    ).toEqual([
      [1, 3, 5, 7],
      [2, 4, 6, 8],
    ]);
  });

  it('transpose([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"]]) should return [["a", "d", "g", "j"], ["b", "e", "h", "k"], ["c", "f", "i", "l"]]', () => {
    expect(
      transpose([
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
      ]),
    ).toEqual([
      ['a', 'd', 'g', 'j'],
      ['b', 'e', 'h', 'k'],
      ['c', 'f', 'i', 'l'],
    ]);
  });

  it('transpose([[true, false, true, false], [false, true, false, true], [true, true, false, false], [false, false, true, true], [true, false, false, true]]) should return [[true, false, true, false, true], [false, true, true, false, false], [true, false, false, true, false], [false, true, false, true, true]]', () => {
    expect(
      transpose([
        [true, false, true, false],
        [false, true, false, true],
        [true, true, false, false],
        [false, false, true, true],
        [true, false, false, true],
      ]),
    ).toEqual([
      [true, false, true, false, true],
      [false, true, true, false, false],
      [true, false, false, true, false],
      [false, true, false, true, true],
    ]);
  });
});
