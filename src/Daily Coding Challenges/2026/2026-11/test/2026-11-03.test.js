import { describe, expect, it } from 'vitest';

import { countWords } from '../2026-11-03.js';

describe('countWords', () => {
  it('countWords("Hello world") should return 2', () => {
    expect(countWords('Hello world')).toEqual(2);
  });

  it('countWords("The quick brown fox jumps over the lazy dog.") should return 9', () => {
    expect(countWords('The quick brown fox jumps over the lazy dog.')).toEqual(
      9,
    );
  });

  it('countWords("I like coding challenges!") should return 4', () => {
    expect(countWords('I like coding challenges!')).toEqual(4);
  });

  it('countWords("Complete the challenge in JavaScript and Python.") should return 7', () => {
    expect(
      countWords('Complete the challenge in JavaScript and Python.'),
    ).toEqual(7);
  });

  it('countWords("The missing semi-colon crashed the entire internet.") should return 7', () => {
    expect(
      countWords('The missing semi-colon crashed the entire internet.'),
    ).toEqual(7);
  });
});
