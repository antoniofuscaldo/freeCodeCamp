import { describe, expect, it } from 'vitest';

import { getJetLagHours } from '../2026-06-08.js';

describe('getJetLagHours', () => {
  it('getJetLagHours("Istanbul", "Hong Kong", 10, "east") should return 6.5', () => {
    expect(getJetLagHours('Istanbul', 'Hong Kong', 10, 'east')).toEqual(6.5);
  });

  it('getJetLagHours("London", "New York", 8, "west") should return 5.8', () => {
    expect(getJetLagHours('London', 'New York', 8, 'west')).toEqual(5.8);
  });

  it('getJetLagHours("Hong Kong", "Tokyo", 4, "east") should return 1.6', () => {
    expect(getJetLagHours('Hong Kong', 'Tokyo', 4, 'east')).toEqual(1.6);
  });

  it('getJetLagHours("Dubai", "London", 7, "west") should return 4.7', () => {
    expect(getJetLagHours('Dubai', 'London', 7, 'west')).toEqual(4.7);
  });

  it('getJetLagHours("Los Angeles", "Hong Kong", 15, "west") should return 17.5', () => {
    expect(getJetLagHours('Los Angeles', 'Hong Kong', 15, 'west')).toEqual(
      17.5,
    );
  });

  it('getJetLagHours("Tokyo", "Dubai", 9, "west") should return 5.9', () => {
    expect(getJetLagHours('Tokyo', 'Dubai', 9, 'west')).toEqual(5.9);
  });

  it('getJetLagHours("New York", "Istanbul", 10, "east") should return 9.5', () => {
    expect(getJetLagHours('New York', 'Istanbul', 10, 'east')).toEqual(9.5);
  });
});
