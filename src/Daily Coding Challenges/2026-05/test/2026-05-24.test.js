import { describe, expect, it } from 'vitest';

import { fixNumerals } from '../2026-05-24.js';

describe('fixNumerals', () => {
  it('fixNumerals("XIIIII") should return "XV"', () => {
    expect(fixNumerals('XIIIII')).toEqual('XV');
  });

  it('fixNumerals("IIIILX") should return "LXIV"', () => {
    expect(fixNumerals('IIIILX')).toEqual('LXIV');
  });

  it('fixNumerals("XXVVVIIIII") should return "XL"', () => {
    expect(fixNumerals('XXVVVIIIII')).toEqual('XL');
  });

  it('fixNumerals("MDCCLXXXXVIIII") should return "MDCCXCIX"', () => {
    expect(fixNumerals('MDCCLXXXXVIIII')).toEqual('MDCCXCIX');
  });

  it('fixNumerals("IIIIVVVVXXXXLLLLCCDD") should return "MCDLXIV"', () => {
    expect(fixNumerals('IIIIVVVVXXXXLLLLCCDD')).toEqual('MCDLXIV');
  });

  it('fixNumerals("ILCDMIVDIIXLCVCXDL") should return "MMCMLXXXIV"', () => {
    expect(fixNumerals('ILCDMIVDIIXLCVCXDL')).toEqual('MMCMLXXXIV');
  });
});
