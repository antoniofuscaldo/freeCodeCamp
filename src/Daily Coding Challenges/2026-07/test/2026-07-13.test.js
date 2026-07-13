import { describe, expect, it } from 'vitest';

import { getTallyCount } from '../2026-07-13.js';

describe('getTallyCount', () => {
  it('getTallyCount("||||") should return 4', () => {
    expect(getTallyCount('||||')).toEqual(4);
  });

  it('getTallyCount("||||/") should return 5', () => {
    expect(getTallyCount('||||/')).toEqual(5);
  });

  it('getTallyCount("||||/ |||") should return 8', () => {
    expect(getTallyCount('||||/ |||')).toEqual(8);
  });

  it('getTallyCount("||||/ ||||/ ||||/ ||") should return 17', () => {
    expect(getTallyCount('||||/ ||||/ ||||/ ||')).toEqual(17);
  });

  it('getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |") should return 41', () => {
    expect(
      getTallyCount('||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |'),
    ).toEqual(41);
  });
});
