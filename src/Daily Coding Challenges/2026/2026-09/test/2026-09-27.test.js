import { describe, expect, it } from 'vitest';

import { isSpam } from '../2026-09-27.js';

describe('isSpam', () => {
  it('isSpam("+0 (200) 234-0182") should return false', () => {
    expect(isSpam('+0 (200) 234-0182')).toEqual(false);
  });

  it('isSpam("+091 (555) 309-1922") should return true', () => {
    expect(isSpam('+091 (555) 309-1922')).toEqual(true);
  });

  it('isSpam("+1 (555) 435-4792") should return true', () => {
    expect(isSpam('+1 (555) 435-4792')).toEqual(true);
  });

  it('isSpam("+0 (955) 234-4364") should return true', () => {
    expect(isSpam('+0 (955) 234-4364')).toEqual(true);
  });

  it('isSpam("+0 (155) 131-6943") should return true', () => {
    expect(isSpam('+0 (155) 131-6943')).toEqual(true);
  });

  it('isSpam("+0 (555) 135-0192") should return true', () => {
    expect(isSpam('+0 (555) 135-0192')).toEqual(true);
  });

  it('isSpam("+0 (555) 564-1987") should return true', () => {
    expect(isSpam('+0 (555) 564-1987')).toEqual(true);
  });

  it('isSpam("+00 (555) 234-0182") should return false', () => {
    expect(isSpam('+00 (555) 234-0182')).toEqual(false);
  });
});
