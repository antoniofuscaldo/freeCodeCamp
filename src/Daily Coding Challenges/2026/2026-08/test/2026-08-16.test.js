import { describe, expect, it } from 'vitest';

import { areAnagrams } from '../2026-08-16.js';

describe('areAnagrams', () => {
  it('areAnagrams("listen", "silent") should return true', () => {
    expect(areAnagrams('listen', 'silent')).toEqual(true);
  });

  it('areAnagrams("School master", "The classroom") should return true', () => {
    expect(areAnagrams('School master', 'The classroom')).toEqual(true);
  });

  it('areAnagrams("A gentleman", "Elegant man") should return true', () => {
    expect(areAnagrams('A gentleman', 'Elegant man')).toEqual(true);
  });

  it('areAnagrams("Hello", "World") should return false', () => {
    expect(areAnagrams('Hello', 'World')).toEqual(false);
  });

  it('areAnagrams("apple", "banana") should return false', () => {
    expect(areAnagrams('apple', 'banana')).toEqual(false);
  });

  it('areAnagrams("cat", "dog") should return false', () => {
    expect(areAnagrams('cat', 'dog')).toEqual(false);
  });
});
