import { describe, expect, it } from 'vitest';

import { getCombinations } from '../2026-05-31.js';

describe('getCombinations', () => {
  it("getCombinations(2) should return 2", () => {
    expect(getCombinations(2)).toEqual(2);
  });

  it("getCombinations(3) should return 5", () => {
    expect(getCombinations(3)).toEqual(5);
  });

  it("getCombinations(5) should return 42", () => {
    expect(getCombinations(5)).toEqual(42);
  });

  it("getCombinations(8) should return 1430", () => {
    expect(getCombinations(8)).toEqual(1430);
  });

  it("getCombinations(13) should return 742900", () => {
    expect(getCombinations(13)).toEqual(742900);
  });
});
