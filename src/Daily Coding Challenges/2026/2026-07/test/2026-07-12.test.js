import { describe, expect, it } from 'vitest';

import { horoscopeMatch } from '../2026-07-12.js';

describe('horoscopeMatch', () => {
  it('horoscopeMatch("Libra", "Sagittarius") should return "80%"', () => {
    expect(horoscopeMatch('Libra', 'Sagittarius')).toEqual('80%');
  });

  it('horoscopeMatch("Gemini", "Scorpio") should return "20%"', () => {
    expect(horoscopeMatch('Gemini', 'Scorpio')).toEqual('20%');
  });

  it('horoscopeMatch("Pisces", "Aries") should return "40%"', () => {
    expect(horoscopeMatch('Pisces', 'Aries')).toEqual('40%');
  });

  it('horoscopeMatch("Capricorn", "Cancer") should return "50%"', () => {
    expect(horoscopeMatch('Capricorn', 'Cancer')).toEqual('50%');
  });

  it('horoscopeMatch("Aquarius", "Aquarius") should return "100%"', () => {
    expect(horoscopeMatch('Aquarius', 'Aquarius')).toEqual('100%');
  });

  it('horoscopeMatch("Virgo", "Taurus") should return "90%"', () => {
    expect(horoscopeMatch('Virgo', 'Taurus')).toEqual('90%');
  });

  it('horoscopeMatch("Leo", "Scorpio") should return "30%"', () => {
    expect(horoscopeMatch('Leo', 'Scorpio')).toEqual('30%');
  });
});
