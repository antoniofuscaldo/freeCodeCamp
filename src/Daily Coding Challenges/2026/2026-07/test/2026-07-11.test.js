import { describe, expect, it } from 'vitest';

import { fiveDice } from '../2026-07-11.js';

describe('fiveDice', () => {
  it('fiveDice([1, 1, 1, 1, 1]) should return "five of a kind"', () => {
    expect(fiveDice([1, 1, 1, 1, 1])).toEqual('five of a kind');
  });

  it('fiveDice([5, 5, 5, 6, 5]) should return "four of a kind"', () => {
    expect(fiveDice([5, 5, 5, 6, 5])).toEqual('four of a kind');
  });

  it('fiveDice([2, 5, 6, 4, 3]) should return "large straight"', () => {
    expect(fiveDice([2, 5, 6, 4, 3])).toEqual('large straight');
  });

  it('fiveDice([4, 3, 3, 3, 1]) should return "three of a kind"', () => {
    expect(fiveDice([4, 3, 3, 3, 1])).toEqual('three of a kind');
  });

  it('fiveDice([4, 6, 2, 6, 5]) should return "pair"', () => {
    expect(fiveDice([4, 6, 2, 6, 5])).toEqual('pair');
  });

  it('fiveDice([1, 4, 5, 6, 2]) should return "no pair"', () => {
    expect(fiveDice([1, 4, 5, 6, 2])).toEqual('no pair');
  });

  it('fiveDice([1, 3, 4, 6, 2]) should return "small straight"', () => {
    expect(fiveDice([1, 3, 4, 6, 2])).toEqual('small straight');
  });

  it('fiveDice([2, 2, 5, 2, 5]) should return "full house"', () => {
    expect(fiveDice([2, 2, 5, 2, 5])).toEqual('full house');
  });

  it('fiveDice([6, 4, 5, 6, 4]) should return "two pair"', () => {
    expect(fiveDice([6, 4, 5, 6, 4])).toEqual('two pair');
  });
});
