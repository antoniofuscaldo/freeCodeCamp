import { describe, expect, it } from 'vitest';

import { guessNumber } from '../2026-05-25.js';

describe('guessNumber', () => {
  it("guessNumber(50, 30) should return \"higher\"", () => {
    expect(guessNumber(50, 30)).toEqual("higher");
  });

  it("guessNumber(85, 99) should return \"lower\"", () => {
    expect(guessNumber(85, 99)).toEqual("lower");
  });

  it("guessNumber(2026, 2026) should return \"you got it!\"", () => {
    expect(guessNumber(2026, 2026)).toEqual("you got it!");
  });

  it("guessNumber(92904, 11283) should return \"higher\"", () => {
    expect(guessNumber(92904, 11283)).toEqual("higher");
  });

  it("guessNumber(230495, 423920) should return \"lower\"", () => {
    expect(guessNumber(230495, 423920)).toEqual("lower");
  });

  it("guessNumber(120349, 120349) should return \"you got it!\"", () => {
    expect(guessNumber(120349, 120349)).toEqual("you got it!");
  });
});
