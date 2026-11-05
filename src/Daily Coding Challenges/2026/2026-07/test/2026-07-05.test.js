import { describe, expect, it } from 'vitest';

import { bucketFill } from '../2026-07-05.js';

describe('bucketFill', () => {
  it('bucketFill([["R", "G"], ["R", "G"]], [0, 1], "B") should return [["R", "B"], ["R", "B"]]', () => {
    expect(
      bucketFill(
        [
          ['R', 'G'],
          ['R', 'G'],
        ],
        [0, 1],
        'B',
      ),
    ).toEqual([
      ['R', 'B'],
      ['R', 'B'],
    ]);
  });

  it('bucketFill([["Y", "G", "G"], ["Y", "Y", "Y"], ["B", "Y", "R"]], [1, 2], "B") should return [["B", "G", "G"], ["B", "B", "B"], ["B", "B", "R"]]', () => {
    expect(
      bucketFill(
        [
          ['Y', 'G', 'G'],
          ['Y', 'Y', 'Y'],
          ['B', 'Y', 'R'],
        ],
        [1, 2],
        'B',
      ),
    ).toEqual([
      ['B', 'G', 'G'],
      ['B', 'B', 'B'],
      ['B', 'B', 'R'],
    ]);
  });

  it('bucketFill([["O", "O", "P"], ["P", "O", "O"], ["P", "P", "O"]], [2, 0], "R") should return [["O", "O", "P"], ["R", "O", "O"], ["R", "R", "O"]]', () => {
    expect(
      bucketFill(
        [
          ['O', 'O', 'P'],
          ['P', 'O', 'O'],
          ['P', 'P', 'O'],
        ],
        [2, 0],
        'R',
      ),
    ).toEqual([
      ['O', 'O', 'P'],
      ['R', 'O', 'O'],
      ['R', 'R', 'O'],
    ]);
  });

  it('bucketFill([["T", "T", "R", "T"], ["R", "T", "R", "T"], ["R", "T", "R", "T"], ["T", "T", "T", "T"]], [0, 3], "Y") should return [["Y", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["Y", "Y", "Y", "Y"]]', () => {
    expect(
      bucketFill(
        [
          ['T', 'T', 'R', 'T'],
          ['R', 'T', 'R', 'T'],
          ['R', 'T', 'R', 'T'],
          ['T', 'T', 'T', 'T'],
        ],
        [0, 3],
        'Y',
      ),
    ).toEqual([
      ['Y', 'Y', 'R', 'Y'],
      ['R', 'Y', 'R', 'Y'],
      ['R', 'Y', 'R', 'Y'],
      ['Y', 'Y', 'Y', 'Y'],
    ]);
  });

  it('bucketFill([["G", "B", "G", "B"], ["R", "B", "B", "G"], ["B", "G", "B", "R"], ["B", "G", "G", "B"]], [2, 2], "G") should return [["G", "G", "G", "B"], ["R", "G", "G", "G"], ["B", "G", "G", "R"], ["B", "G", "G", "B"]]', () => {
    expect(
      bucketFill(
        [
          ['G', 'B', 'G', 'B'],
          ['R', 'B', 'B', 'G'],
          ['B', 'G', 'B', 'R'],
          ['B', 'G', 'G', 'B'],
        ],
        [2, 2],
        'G',
      ),
    ).toEqual([
      ['G', 'G', 'G', 'B'],
      ['R', 'G', 'G', 'G'],
      ['B', 'G', 'G', 'R'],
      ['B', 'G', 'G', 'B'],
    ]);
  });
});
