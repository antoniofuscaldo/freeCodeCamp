import { describe, expect, it } from 'vitest';

import { petYears } from '../2026-07-14.js';

describe('petYears', () => {
  it('petYears("dog", 5) should return 35', () => {
    expect(petYears('dog', 5)).toEqual(35);
  });

  it('petYears("cat", 9) should return 54', () => {
    expect(petYears('cat', 9)).toEqual(54);
  });

  it('petYears("rabbit", 3) should return 24', () => {
    expect(petYears('rabbit', 3)).toEqual(24);
  });

  it('petYears("hamster", 4) should return 120', () => {
    expect(petYears('hamster', 4)).toEqual(120);
  });

  it('petYears("guinea pig", 5) should return 60', () => {
    expect(petYears('guinea pig', 5)).toEqual(60);
  });

  it('petYears("goldfish", 2) should return 12', () => {
    expect(petYears('goldfish', 2)).toEqual(12);
  });

  it('petYears("bird", 1) should return 5', () => {
    expect(petYears('bird', 1)).toEqual(5);
  });
});
