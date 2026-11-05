import { describe, expect, it } from 'vitest';

import { isPangram } from '../2026-09-03.js';

describe('isPangram', () => {
  it('isPangram("hello", "helo") should return true', () => {
    expect(isPangram('hello', 'helo')).toEqual(true);
  });

  it('isPangram("hello", "hel") should return false', () => {
    expect(isPangram('hello', 'hel')).toEqual(false);
  });

  it('isPangram("hello", "helow") should return false', () => {
    expect(isPangram('hello', 'helow')).toEqual(false);
  });

  it('isPangram("hello world", "helowrd") should return true', () => {
    expect(isPangram('hello world', 'helowrd')).toEqual(true);
  });

  it('isPangram("Hello World!", "helowrd") should return true', () => {
    expect(isPangram('Hello World!', 'helowrd')).toEqual(true);
  });

  it('isPangram("Hello World!", "heliowrd") should return false', () => {
    expect(isPangram('Hello World!', 'heliowrd')).toEqual(false);
  });

  it('isPangram("freeCodeCamp", "frcdmp") should return false', () => {
    expect(isPangram('freeCodeCamp', 'frcdmp')).toEqual(false);
  });

  it('isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return true', () => {
    expect(
      isPangram(
        'The quick brown fox jumps over the lazy dog.',
        'abcdefghijklmnopqrstuvwxyz',
      ),
    ).toEqual(true);
  });
});
