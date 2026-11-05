import { describe, expect, it } from 'vitest';

import { playGame } from '../2026-07-23.js';

describe('playGame', () => {
  it('playGame("CCCC", "CCCC") should return [12, 12]', () => {
    expect(playGame('CCCC', 'CCCC')).toEqual([12, 12]);
  });

  it('playGame("DDDD", "DDDD") should return [4, 4]', () => {
    expect(playGame('DDDD', 'DDDD')).toEqual([4, 4]);
  });

  it('playGame("CCDD", "CDDD") should return [5, 10]', () => {
    expect(playGame('CCDD', 'CDDD')).toEqual([5, 10]);
  });

  it('playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD") should return [24, 34]', () => {
    expect(playGame('CCCDCDCCCDDC', 'CCDDCDCDDCCD')).toEqual([24, 34]);
  });

  it('playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC") should return [66, 21]', () => {
    expect(playGame('DDCCDDDDCDDCDDDCDD', 'CCDCCCDCCCDCCCCDCC')).toEqual([
      66, 21,
    ]);
  });
});
