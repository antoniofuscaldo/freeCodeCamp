import { describe, expect, it } from 'vitest';

import { getWeekday } from '../2026-11-06.js';

describe('getWeekday', () => {
  it('getWeekday("2025-11-06") should return Thursday', () => {
    expect(getWeekday('2025-11-06')).toEqual('Thursday');
  });

  it('getWeekday("1999-12-31") should return Friday', () => {
    expect(getWeekday('1999-12-31')).toEqual('Friday');
  });

  it('getWeekday("1111-11-11") should return Saturday', () => {
    expect(getWeekday('1111-11-11')).toEqual('Saturday');
  });

  it('getWeekday("2112-12-21") should return Wednesday', () => {
    expect(getWeekday('2112-12-21')).toEqual('Wednesday');
  });

  it('getWeekday("2345-10-01") should return Monday', () => {
    expect(getWeekday('2345-10-01')).toEqual('Monday');
  });
});
