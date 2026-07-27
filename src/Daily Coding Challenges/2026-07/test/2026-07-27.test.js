import { describe, expect, it } from 'vitest';

import { isPronic } from '../2026-07-27.js';

describe('isPronic', () => {
  it('isPronic(6) should return true', () => {
    expect(isPronic(6)).toEqual(true);
  });

  it('isPronic(15) should return false', () => {
    expect(isPronic(15)).toEqual(false);
  });

  it('isPronic(12) should return true', () => {
    expect(isPronic(12)).toEqual(true);
  });

  it('isPronic(132) should return true', () => {
    expect(isPronic(132)).toEqual(true);
  });

  it('isPronic(80) should return false', () => {
    expect(isPronic(80)).toEqual(false);
  });

  it('isPronic(0) should return true', () => {
    expect(isPronic(0)).toEqual(true);
  });
});
