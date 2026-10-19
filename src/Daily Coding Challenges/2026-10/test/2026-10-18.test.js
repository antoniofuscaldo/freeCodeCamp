import { describe, expect, it } from 'vitest';

import { sockPairs } from '../2026-10-18.js';

describe('sockPairs', () => {
  it('sockPairs(2, 5) should return 1', () => {
    expect(sockPairs(2, 5)).toEqual(1);
  });

  it('sockPairs(1, 2) should return 0', () => {
    expect(sockPairs(1, 2)).toEqual(0);
  });

  it('sockPairs(5, 11) should return 4', () => {
    expect(sockPairs(5, 11)).toEqual(4);
  });

  it('sockPairs(6, 25) should return 3', () => {
    expect(sockPairs(6, 25)).toEqual(3);
  });

  it('sockPairs(1, 8) should return 0', () => {
    expect(sockPairs(1, 8)).toEqual(0);
  });
});
