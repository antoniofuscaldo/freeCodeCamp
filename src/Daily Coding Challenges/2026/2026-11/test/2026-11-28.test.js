import { describe, expect, it } from 'vitest';

import { compare } from '../2026-11-28.js';

describe('compare', () => {
  it('compare("APPLE", "POPPA") should return "10201"', () => {
    expect(compare('APPLE', 'POPPA')).toEqual('10201');
  });

  it('compare("REACT", "TRACE") should return "11221"', () => {
    expect(compare('REACT', 'TRACE')).toEqual('11221');
  });

  it('compare("DEBUGS", "PYTHON") should return "000000"', () => {
    expect(compare('DEBUGS', 'PYTHON')).toEqual('000000');
  });

  it('compare("JAVASCRIPT", "TYPESCRIPT") should return "0000222222"', () => {
    expect(compare('JAVASCRIPT', 'TYPESCRIPT')).toEqual('0000222222');
  });

  it('compare("ORANGE", "ROUNDS") should return "110200"', () => {
    expect(compare('ORANGE', 'ROUNDS')).toEqual('110200');
  });

  it('compare("WIRELESS", "ETHERNET") should return "10021000"', () => {
    expect(compare('WIRELESS', 'ETHERNET')).toEqual('10021000');
  });
});
