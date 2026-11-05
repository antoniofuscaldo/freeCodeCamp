import { describe, expect, it } from 'vitest';

import { parseRomanNumeral } from '../2026-09-07.js';

describe('parseRomanNumeral', () => {
  it('parseRomanNumeral("III") should return 3', () => {
    expect(parseRomanNumeral('III')).toEqual(3);
  });

  it('parseRomanNumeral("IV") should return 4', () => {
    expect(parseRomanNumeral('IV')).toEqual(4);
  });

  it('parseRomanNumeral("XXVI") should return 26', () => {
    expect(parseRomanNumeral('XXVI')).toEqual(26);
  });

  it('parseRomanNumeral("XCIX") should return 99', () => {
    expect(parseRomanNumeral('XCIX')).toEqual(99);
  });

  it('parseRomanNumeral("CDLX") should return 460', () => {
    expect(parseRomanNumeral('CDLX')).toEqual(460);
  });

  it('parseRomanNumeral("DIV") should return 504', () => {
    expect(parseRomanNumeral('DIV')).toEqual(504);
  });

  it('parseRomanNumeral("MMXXV") should return 2025', () => {
    expect(parseRomanNumeral('MMXXV')).toEqual(2025);
  });
});
