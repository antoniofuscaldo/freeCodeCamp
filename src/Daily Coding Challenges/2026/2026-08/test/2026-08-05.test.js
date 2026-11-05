import { describe, expect, it } from 'vitest';

import { getSpokenDuration } from '../2026-08-05.js';

describe('getSpokenDuration', () => {
  it('getSpokenDuration(3723) should return "1 hour, 2 minutes and 3 seconds"', () => {
    expect(getSpokenDuration(3723)).toEqual('1 hour, 2 minutes and 3 seconds');
  });

  it('getSpokenDuration(7295) should return "2 hours, 1 minute and 35 seconds"', () => {
    expect(getSpokenDuration(7295)).toEqual('2 hours, 1 minute and 35 seconds');
  });

  it('getSpokenDuration(8521) should return "2 hours, 22 minutes and 1 second"', () => {
    expect(getSpokenDuration(8521)).toEqual('2 hours, 22 minutes and 1 second');
  });

  it('getSpokenDuration(435) should return "7 minutes and 15 seconds"', () => {
    expect(getSpokenDuration(435)).toEqual('7 minutes and 15 seconds');
  });

  it('getSpokenDuration(14455) should return "4 hours and 55 seconds"', () => {
    expect(getSpokenDuration(14455)).toEqual('4 hours and 55 seconds');
  });

  it('getSpokenDuration(72000) should return "20 hours"', () => {
    expect(getSpokenDuration(72000)).toEqual('20 hours');
  });

  it('getSpokenDuration(1) should return "1 second"', () => {
    expect(getSpokenDuration(1)).toEqual('1 second');
  });
});
