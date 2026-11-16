import { describe, expect, it } from 'vitest';

import { daysUntilWeekend } from '../2026-11-14.js';

describe('daysUntilWeekend', () => {
  it('daysUntilWeekend("2025-11-14") should return "1 day until the weekend."', () => {
    expect(daysUntilWeekend('2025-11-14')).toEqual('1 day until the weekend.');
  });

  it('daysUntilWeekend("2025-01-01") should return "3 days until the weekend."', () => {
    expect(daysUntilWeekend('2025-01-01')).toEqual('3 days until the weekend.');
  });

  it('daysUntilWeekend("2025-12-06") should return "It\'s the weekend!"', () => {
    expect(daysUntilWeekend('2025-12-06')).toEqual("It's the weekend!");
  });

  it('daysUntilWeekend("2026-01-27") should return "4 days until the weekend."', () => {
    expect(daysUntilWeekend('2026-01-27')).toEqual('4 days until the weekend.');
  });

  it('daysUntilWeekend("2026-09-07") should return "5 days until the weekend."', () => {
    expect(daysUntilWeekend('2026-09-07')).toEqual('5 days until the weekend.');
  });

  it('daysUntilWeekend("2026-11-29") should return "It\'s the weekend!"', () => {
    expect(daysUntilWeekend('2026-11-29')).toEqual("It's the weekend!");
  });
});
