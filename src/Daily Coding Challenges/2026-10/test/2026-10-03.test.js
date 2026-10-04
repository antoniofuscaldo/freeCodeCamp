import { describe, expect, it } from 'vitest';

import { checkStrength } from '../2026-10-03.js';

describe('checkStrength', () => {
  it('checkStrength("123456") should return "weak"', () => {
    expect(checkStrength('123456')).toEqual('weak');
  });

  it('checkStrength("pass!!!") should return "weak"', () => {
    expect(checkStrength('pass!!!')).toEqual('weak');
  });

  it('checkStrength("Qwerty") should return "weak"', () => {
    expect(checkStrength('Qwerty')).toEqual('weak');
  });

  it('checkStrength("PASSWORD") should return "weak"', () => {
    expect(checkStrength('PASSWORD')).toEqual('weak');
  });

  it('checkStrength("PASSWORD!") should return "medium"', () => {
    expect(checkStrength('PASSWORD!')).toEqual('medium');
  });

  it('checkStrength("PassWord%^!") should return "medium"', () => {
    expect(checkStrength('PassWord%^!')).toEqual('medium');
  });

  it('checkStrength("qwerty12345") should return "medium"', () => {
    expect(checkStrength('qwerty12345')).toEqual('medium');
  });

  it('checkStrength("S3cur3P@ssw0rd") should return "strong"', () => {
    expect(checkStrength('S3cur3P@ssw0rd')).toEqual('strong');
  });

  it('checkStrength("C0d3&Fun!") should return "strong"', () => {
    expect(checkStrength('C0d3&Fun!')).toEqual('strong');
  });
});
