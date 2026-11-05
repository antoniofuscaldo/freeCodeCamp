import { describe, expect, it } from 'vitest';

import { makeLeet } from '../2026-06-22.js';

describe('makeLeet', () => {
  it('makeLeet("cool") should return "c001"', () => {
    expect(makeLeet('cool')).toEqual('c001');
  });

  it('makeLeet("leet") should return "1337"', () => {
    expect(makeLeet('leet')).toEqual('1337');
  });

  it('makeLeet("hacker") should return "h4ck3r"', () => {
    expect(makeLeet('hacker')).toEqual('h4ck3r');
  });

  it('makeLeet("satellite") should return "547311173"', () => {
    expect(makeLeet('satellite')).toEqual('547311173');
  });

  it('makeLeet("abcdefghijklmnopqrstuvwxyz") should return "4bcd3f9h1jk1mn0pqr57uvwxyz"', () => {
    expect(makeLeet('abcdefghijklmnopqrstuvwxyz')).toEqual(
      '4bcd3f9h1jk1mn0pqr57uvwxyz',
    );
  });
});
