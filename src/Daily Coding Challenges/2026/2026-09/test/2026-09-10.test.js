import { describe, expect, it } from 'vitest';

import { arrayDiff } from '../2026-09-10.js';

describe('arrayDiff', () => {
  it('arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]) should return ["cherry"]', () => {
    expect(
      arrayDiff(['apple', 'banana'], ['apple', 'banana', 'cherry']),
    ).toEqual(['cherry']);
  });

  it('arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]) should return ["cherry"]', () => {
    expect(
      arrayDiff(['apple', 'banana', 'cherry'], ['apple', 'banana']),
    ).toEqual(['cherry']);
  });

  it('arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]) should return ["eight", "four", "six", "two"]', () => {
    expect(
      arrayDiff(
        ['one', 'two', 'three', 'four', 'six'],
        ['one', 'three', 'eight'],
      ),
    ).toEqual(['eight', 'four', 'six', 'two']);
  });

  it('arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) should return ["five", "one", "seven", "three"]', () => {
    expect(
      arrayDiff(
        ['two', 'four', 'five', 'eight'],
        ['one', 'two', 'three', 'four', 'seven', 'eight'],
      ),
    ).toEqual(['five', 'one', 'seven', 'three']);
  });

  it('arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]) should return ["freeCodeCamp", "rocks"]', () => {
    expect(
      arrayDiff(['I', 'like', 'freeCodeCamp'], ['I', 'like', 'rocks']),
    ).toEqual(['freeCodeCamp', 'rocks']);
  });
});
