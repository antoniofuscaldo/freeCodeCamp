import { describe, expect, it } from 'vitest';

import { fizzBuzzCount } from '../2026-05-28.js';

describe('fizzBuzzCount', () => {
  it("fizzBuzzCount(1, 11) should return {fizz: 3, buzz: 2}", () => {
    expect(fizzBuzzCount(1, 11)).toEqual({fizz: 3, buzz: 2});
  });

  it("fizzBuzzCount(14, 41) should return {fizz: 9, buzz: 6}", () => {
    expect(fizzBuzzCount(14, 41)).toEqual({fizz: 9, buzz: 6});
  });

  it("fizzBuzzCount(24, 100) should return {fizz: 26, buzz: 16}", () => {
    expect(fizzBuzzCount(24, 100)).toEqual({fizz: 26, buzz: 16});
  });

  it("fizzBuzzCount(-635, -14) should return {fizz: 207, buzz: 125}", () => {
    expect(fizzBuzzCount(-635, -14)).toEqual({fizz: 207, buzz: 125});
  });

  it("fizzBuzzCount(-5432, 6789) should return {fizz: 4074, buzz: 2444}", () => {
    expect(fizzBuzzCount(-5432, 6789)).toEqual({fizz: 4074, buzz: 2444});
  });
});
