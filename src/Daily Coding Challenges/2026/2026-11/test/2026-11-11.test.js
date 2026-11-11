import { describe, expect, it } from 'vitest';

import { count } from '../2026-11-11.js';

describe('count', () => {
  it('count("Hello World") should return [3, 7]', () => {
    expect(count('Hello World')).toEqual([3, 7]);
  });

  it('count("JavaScript") should return [3, 7]', () => {
    expect(count('JavaScript')).toEqual([3, 7]);
  });

  it('count("Python") should return [1, 5]', () => {
    expect(count('Python')).toEqual([1, 5]);
  });

  it('count("freeCodeCamp") should return [5, 7]', () => {
    expect(count('freeCodeCamp')).toEqual([5, 7]);
  });

  it('count("Hello, World!") should return [3, 7]', () => {
    expect(count('Hello, World!')).toEqual([3, 7]);
  });

  it('count("The quick brown fox jumps over the lazy dog.") should return [11, 24]', () => {
    expect(count('The quick brown fox jumps over the lazy dog.')).toEqual([
      11, 24,
    ]);
  });
});
