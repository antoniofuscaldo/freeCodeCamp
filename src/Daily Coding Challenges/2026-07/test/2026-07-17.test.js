import { describe, expect, it } from 'vitest';

import { daysUntilBirthday } from '../2026-07-17.js';

describe('daysUntilBirthday', () => {
  it('daysUntilBirthday("2026-07-16", "9/7") should return 53', () => {
    expect(daysUntilBirthday('2026-07-16', '9/7')).toEqual(53);
  });

  it('daysUntilBirthday("2026-07-16", "3/22") should return 249', () => {
    expect(daysUntilBirthday('2026-07-16', '3/22')).toEqual(249);
  });

  it('daysUntilBirthday("2026-07-16", "7/16") should return 365', () => {
    expect(daysUntilBirthday('2026-07-16', '7/16')).toEqual(365);
  });

  it('daysUntilBirthday("2024-02-28", "3/1") should return 2', () => {
    expect(daysUntilBirthday('2024-02-28', '3/1')).toEqual(2);
  });

  it('daysUntilBirthday("2023-04-24", "12/30") should return 250', () => {
    expect(daysUntilBirthday('2023-04-24', '12/30')).toEqual(250);
  });

  it('daysUntilBirthday("2024-03-01", "2/29") should return 1460', () => {
    expect(daysUntilBirthday('2024-03-01', '2/29')).toEqual(1460);
  });

  it('daysUntilBirthday("2096-03-01", "2/29") should return 2920', () => {
    expect(daysUntilBirthday('2096-03-01', '2/29')).toEqual(2920);
  });
});
