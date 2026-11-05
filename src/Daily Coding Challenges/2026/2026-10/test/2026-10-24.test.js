import { describe, expect, it } from 'vitest';

import { dive } from '../2026-10-24.js';

describe('dive', () => {
  it('dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]) should return "Recovered"', () => {
    expect(
      dive(
        [
          ['-', 'X'],
          ['-', 'X'],
          ['-', 'O'],
        ],
        [2, 1],
      ),
    ).toEqual('Recovered');
  });

  it('dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]) should return "Empty"', () => {
    expect(
      dive(
        [
          ['-', 'X'],
          ['-', 'X'],
          ['-', 'O'],
        ],
        [2, 0],
      ),
    ).toEqual('Empty');
  });

  it('dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]) should return "Found"', () => {
    expect(
      dive(
        [
          ['-', 'X'],
          ['-', 'O'],
          ['-', 'O'],
        ],
        [1, 1],
      ),
    ).toEqual('Found');
  });

  it('dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]) should return "Found"', () => {
    expect(
      dive(
        [
          ['-', '-', '-'],
          ['X', 'O', 'X'],
          ['-', '-', '-'],
        ],
        [1, 2],
      ),
    ).toEqual('Found');
  });

  it('dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]) should return "Recovered"', () => {
    expect(
      dive(
        [
          ['-', '-', '-'],
          ['-', '-', '-'],
          ['O', 'X', 'X'],
        ],
        [2, 0],
      ),
    ).toEqual('Recovered');
  });

  it('dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]) should return "Empty"', () => {
    expect(
      dive(
        [
          ['-', '-', '-'],
          ['-', '-', '-'],
          ['O', 'X', 'X'],
        ],
        [1, 2],
      ),
    ).toEqual('Empty');
  });
});
