import { describe, expect, it } from 'vitest';

import { getOdds } from '../2026-07-18.js';

describe('getOdds', () => {
  it('getOdds(1, 5) should return "1 in 6"', () => {
    expect(getOdds(1, 5)).toEqual('1 in 6');
  });

  it('getOdds(2, 4) should return "1 in 12"', () => {
    expect(getOdds(2, 4)).toEqual('1 in 12');
  });

  it('getOdds(3, 10) should return "1 in 8"', () => {
    expect(getOdds(3, 10)).toEqual('1 in 8');
  });

  it('getOdds(4, 7) should return "1 in 65"', () => {
    expect(getOdds(4, 7)).toEqual('1 in 65');
  });

  it('getOdds(5, 26) should return "1 in 111"', () => {
    expect(getOdds(5, 26)).toEqual('1 in 111');
  });

  it('getOdds(6, 35) should return "1 in 7776"', () => {
    expect(getOdds(6, 35)).toEqual('1 in 7776');
  });
});
