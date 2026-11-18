import { describe, expect, it } from 'vitest';

import { oneHundred } from '../2026-11-18.js';

describe('oneHundred', () => {
  it('oneHundred("One hundred ") should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One "', () => {
    expect(oneHundred('One hundred ')).toEqual(
      'One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ',
    );
  });

  it('oneHundred("freeCodeCamp ") should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC"', () => {
    expect(oneHundred('freeCodeCamp ')).toEqual(
      'freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC',
    );
  });

  it('oneHundred("daily challenges ") should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge"', () => {
    expect(oneHundred('daily challenges ')).toEqual(
      'daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge',
    );
  });

  it('oneHundred("!") should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"', () => {
    expect(oneHundred('!')).toEqual(
      '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    );
  });
});
