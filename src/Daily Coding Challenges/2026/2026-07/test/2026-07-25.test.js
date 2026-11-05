import { describe, expect, it } from 'vitest';

import { findSignal } from '../2026-07-25.js';

describe('findSignal', () => {
  it('findSignal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]) should return [1, 2]', () => {
    expect(
      findSignal([
        [0, 0, 1],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toEqual([1, 2]);
  });

  it('findSignal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]) should return [2, 1]', () => {
    expect(
      findSignal([
        [0, 2, 0],
        [1, 0, 0],
        [0, 0, 1],
      ]),
    ).toEqual([2, 1]);
  });

  it('findSignal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]) should return [2, 2]', () => {
    expect(
      findSignal([
        [0, 0, 2, 0],
        [0, 0, 0, 0],
        [2, 0, 0, 0],
        [0, 0, 0, 1],
      ]),
    ).toEqual([2, 2]);
  });

  it('findSignal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]) should return [3, 4]', () => {
    expect(
      findSignal([
        [0, 3, 0, 0, 0],
        [0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0],
        [4, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ]),
    ).toEqual([3, 4]);
  });

  it('findSignal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]) should return [3, 3]', () => {
    expect(
      findSignal([
        [3, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 2],
      ]),
    ).toEqual([3, 3]);
  });
});
