import { describe, expect, it } from 'vitest';

import { bucketFill } from '../2026-08-10.js';

describe('bucketFill', () => {
  it('bucketFill([["B", "B"], ["B", "B"]], "R") should return 1', () => {
    expect(
      bucketFill(
        [
          ['B', 'B'],
          ['B', 'B'],
        ],
        'R',
      ),
    ).toEqual(1);
  });

  it('bucketFill([["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]], "G") should return 0', () => {
    expect(
      bucketFill(
        [
          ['G', 'G', 'G'],
          ['G', 'G', 'G'],
          ['G', 'G', 'G'],
        ],
        'G',
      ),
    ).toEqual(0);
  });

  it('bucketFill([["P", "P", "Y"], ["Y", "P", "Y"], ["Y", "P", "P"]], "O") should return 2', () => {
    expect(
      bucketFill(
        [
          ['P', 'P', 'Y'],
          ['Y', 'P', 'Y'],
          ['Y', 'P', 'P'],
        ],
        'O',
      ),
    ).toEqual(2);
  });

  it('bucketFill([["G", "Y", "C", "C"], ["Y", "Y", "Y", "B"], ["C", "Y", "B", "B"], ["C", "B", "B", "C"]], "R") should return 4', () => {
    expect(
      bucketFill(
        [
          ['G', 'Y', 'C', 'C'],
          ['Y', 'Y', 'Y', 'B'],
          ['C', 'Y', 'B', 'B'],
          ['C', 'B', 'B', 'C'],
        ],
        'R',
      ),
    ).toEqual(4);
  });

  it('bucketFill([["G", "G", "O", "O"], ["G", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["G", "G", "G", "G"]], "P") should return 5', () => {
    expect(
      bucketFill(
        [
          ['G', 'G', 'O', 'O'],
          ['G', 'Y', 'B', 'Y'],
          ['B', 'Y', 'B', 'Y'],
          ['B', 'Y', 'B', 'Y'],
          ['G', 'G', 'G', 'G'],
        ],
        'P',
      ),
    ).toEqual(5);
  });

  it('bucketFill([["R", "G", "R", "G"], ["R", "G", "R", "G"], ["B", "B", "B", "B"], ["B", "B", "B", "B"], ["R", "G", "R", "G"]], "Y") should return 3', () => {
    expect(
      bucketFill(
        [
          ['R', 'G', 'R', 'G'],
          ['R', 'G', 'R', 'G'],
          ['B', 'B', 'B', 'B'],
          ['B', 'B', 'B', 'B'],
          ['R', 'G', 'R', 'G'],
        ],
        'Y',
      ),
    ).toEqual(3);
  });
});
