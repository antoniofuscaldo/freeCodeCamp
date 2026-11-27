import { describe, expect, it } from 'vitest';

import { calculateAge } from '../2026-11-27.js';

describe('calculateAge', () => {
  it('calculateAge("2000-11-20") should return 25', () => {
    expect(calculateAge('2000-11-20')).toEqual(25);
  });

  it('calculateAge("2000-12-01") should return 24', () => {
    expect(calculateAge('2000-12-01')).toEqual(24);
  });

  it('calculateAge("2014-10-25") should return 11', () => {
    expect(calculateAge('2014-10-25')).toEqual(11);
  });

  it('calculateAge("1994-01-06") should return 31', () => {
    expect(calculateAge('1994-01-06')).toEqual(31);
  });

  it('calculateAge("1994-12-14") should return 30', () => {
    expect(calculateAge('1994-12-14')).toEqual(30);
  });
});
