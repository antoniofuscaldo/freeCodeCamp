import { describe, expect, it } from 'vitest';

import { toBinary } from '../2026-10-02.js';

describe('toBinary', () => {
  it('toBinary(5) should return "101"', () => {
    expect(toBinary(5)).toEqual('101');
  });

  it('toBinary(12) should return "1100"', () => {
    expect(toBinary(12)).toEqual('1100');
  });

  it('toBinary(50) should return "110010"', () => {
    expect(toBinary(50)).toEqual('110010');
  });

  it('toBinary(99) should return "1100011"', () => {
    expect(toBinary(99)).toEqual('1100011');
  });
});
