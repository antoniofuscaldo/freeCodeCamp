import { describe, expect, it } from 'vitest';

import { moonPhase } from '../2026-10-09.js';

describe('moonPhase', () => {
  it('moonPhase("2000-01-12") should return "New"', () => {
    expect(moonPhase('2000-01-12')).toEqual('New');
  });

  it('moonPhase("2000-01-13") should return "Waxing"', () => {
    expect(moonPhase('2000-01-13')).toEqual('Waxing');
  });

  it('moonPhase("2014-10-15") should return "Full"', () => {
    expect(moonPhase('2014-10-15')).toEqual('Full');
  });

  it('moonPhase("2012-10-21") should return "Waning"', () => {
    expect(moonPhase('2012-10-21')).toEqual('Waning');
  });

  it('moonPhase("2022-12-14") should return "New"', () => {
    expect(moonPhase('2022-12-14')).toEqual('New');
  });
});
