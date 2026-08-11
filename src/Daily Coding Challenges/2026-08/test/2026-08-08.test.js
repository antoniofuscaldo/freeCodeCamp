import { describe, expect, it } from 'vitest';

import { bucketFill } from '../2026-08-08.js';

describe('bucketFill', () => {
  it('bucketFill([["R", "R"], ["R", "R"]], "G") should return 1', () => {
    expect(
      bucketFill(
        [
          ['R', 'R'],
          ['R', 'R'],
        ],
        'G',
      ),
    ).toEqual(1);
  });

  it('bucketFill([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]], "B") should return 0', () => {
    expect(
      bucketFill(
        [
          ['B', 'B', 'B'],
          ['B', 'B', 'B'],
          ['B', 'B', 'B'],
        ],
        'B',
      ),
    ).toEqual(0);
  });

  it('bucketFill([["G", "Y", "Y"], ["G", "Y", "G"], ["Y", "Y", "G"]], "R") should return 3', () => {
    expect(
      bucketFill(
        [
          ['G', 'Y', 'Y'],
          ['G', 'Y', 'G'],
          ['Y', 'Y', 'G'],
        ],
        'R',
      ),
    ).toEqual(3);
  });

  it('bucketFill([["G", "G", "P", "Y"], ["O", "P", "P", "P"], ["O", "O", "P", "G"], ["G", "O", "O", "G"]], "P") should return 5', () => {
    expect(
      bucketFill(
        [
          ['G', 'G', 'P', 'Y'],
          ['O', 'P', 'P', 'P'],
          ['O', 'O', 'P', 'G'],
          ['G', 'O', 'O', 'G'],
        ],
        'P',
      ),
    ).toEqual(5);
  });

  it('bucketFill([["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]], "Y") should return 12', () => {
    expect(
      bucketFill(
        [
          ['G', 'G', 'C', 'C', 'O'],
          ['B', 'Y', 'B', 'Y', 'O'],
          ['B', 'J', 'O', 'J', 'B'],
          ['G', 'Y', 'Y', 'Y', 'B'],
          ['G', 'P', 'P', 'G', 'G'],
        ],
        'Y',
      ),
    ).toEqual(12);
  });
});
