import { describe, expect, it } from 'vitest';

import { cast } from '../2026-06-17.js';

describe('cast', () => {
  it('cast("fihwl") should return 33', () => {
    expect(cast('fihwl')).toEqual(33);
  });

  it('cast("lwswfi") should return 45', () => {
    expect(cast('lwswfi')).toEqual(45);
  });

  it('cast("wislhfl") should return 37', () => {
    expect(cast('wislhfl')).toEqual(37);
  });

  it('cast("sihwlih") should return 50', () => {
    expect(cast('sihwlih')).toEqual(50);
  });

  it('cast("wishlfihwslwifihl") should return 101', () => {
    expect(cast('wishlfihwslwifihl')).toEqual(101);
  });
});
