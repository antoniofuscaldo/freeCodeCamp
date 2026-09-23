import { describe, expect, it } from 'vitest';

import { isMirror } from '../2026-09-23.js';

describe('isMirror', () => {
  it('isMirror("helloworld", "helloworld") should return false', () => {
    expect(isMirror('helloworld', 'helloworld')).toEqual(false);
  });

  it('isMirror("Hello World", "dlroW olleH") should return true', () => {
    expect(isMirror('Hello World', 'dlroW olleH')).toEqual(true);
  });

  it('isMirror("RaceCar", "raCecaR") should return true', () => {
    expect(isMirror('RaceCar', 'raCecaR')).toEqual(true);
  });

  it('isMirror("RaceCar", "RaceCar") should return false', () => {
    expect(isMirror('RaceCar', 'RaceCar')).toEqual(false);
  });

  it('isMirror("Mirror", "rorrim") should return false', () => {
    expect(isMirror('Mirror', 'rorrim')).toEqual(false);
  });

  it('isMirror("Hello World", "dlroW-olleH") should return true', () => {
    expect(isMirror('Hello World', 'dlroW-olleH')).toEqual(true);
  });

  it('isMirror("Hello World", "!dlroW !olleH") should return true', () => {
    expect(isMirror('Hello World', '!dlroW !olleH')).toEqual(true);
  });
});
