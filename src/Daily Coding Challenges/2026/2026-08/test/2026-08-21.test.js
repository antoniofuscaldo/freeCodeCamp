import { describe, expect, it } from 'vitest';

import { milePace } from '../2026-08-21.js';

describe('milePace', () => {
  it('milePace(3, "24:00") should return "08:00"', () => {
    expect(milePace(3, '24:00')).toEqual('08:00');
  });

  it('milePace(1, "06:45") should return "06:45"', () => {
    expect(milePace(1, '06:45')).toEqual('06:45');
  });

  it('milePace(2, "07:00") should return "03:30"', () => {
    expect(milePace(2, '07:00')).toEqual('03:30');
  });

  it('milePace(26.2, "120:35") should return "04:36"', () => {
    expect(milePace(26.2, '120:35')).toEqual('04:36');
  });
});
