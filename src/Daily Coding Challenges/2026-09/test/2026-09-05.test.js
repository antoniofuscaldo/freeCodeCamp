import { describe, expect, it } from 'vitest';

import { isValidIPv4 } from '../2026-09-05.js';

describe('isValidIPv4', () => {
  it('isValidIPv4("192.168.1.1") should return true', () => {
    expect(isValidIPv4('192.168.1.1')).toEqual(true);
  });

  it('isValidIPv4("0.0.0.0") should return true', () => {
    expect(isValidIPv4('0.0.0.0')).toEqual(true);
  });

  it('isValidIPv4("255.01.50.111") should return false', () => {
    expect(isValidIPv4('255.01.50.111')).toEqual(false);
  });

  it('isValidIPv4("255.00.50.111") should return false', () => {
    expect(isValidIPv4('255.00.50.111')).toEqual(false);
  });

  it('isValidIPv4("256.101.50.115") should return false', () => {
    expect(isValidIPv4('256.101.50.115')).toEqual(false);
  });

  it('isValidIPv4("192.168.101.") should return false', () => {
    expect(isValidIPv4('192.168.101.')).toEqual(false);
  });

  it('isValidIPv4("192168145213") should return false', () => {
    expect(isValidIPv4('192168145213')).toEqual(false);
  });
});
