import { describe, expect, it } from 'vitest';

import { combinations } from '../2026-11-07.js';

describe('combinations', () => {
  it('combinations(52) should return 1', () => {
    expect(combinations(52)).toEqual(1);
  });

  it('combinations(1) should return 52', () => {
    expect(combinations(1)).toEqual(52);
  });

  it('combinations(2) should return 1326', () => {
    expect(combinations(2)).toEqual(1326);
  });

  it('combinations(5) should return 2598960', () => {
    expect(combinations(5)).toEqual(2598960);
  });

  it('combinations(10) should return 15820024220', () => {
    expect(combinations(10)).toEqual(15820024220);
  });

  it('combinations(50) should return 1326', () => {
    expect(combinations(50)).toEqual(1326);
  });
});
