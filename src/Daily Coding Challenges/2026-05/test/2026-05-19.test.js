import { describe, expect, it } from 'vitest';

import { sleepDebt } from '../2026-05-19.js';

describe('sleepDebt', () => {
  it("sleepDebt([6, 6, 6, 6, 6, 6], 8) should return 20", () => {
    expect(sleepDebt([6, 6, 6, 6, 6, 6], 8)).toEqual(20);
  });

  it("sleepDebt([6, 7, 8, 4, 8, 6], 7) should return 10", () => {
    expect(sleepDebt([6, 7, 8, 4, 8, 6], 7)).toEqual(10);
  });

  it("sleepDebt([10, 10, 9, 10, 9, 11], 9) should return 4", () => {
    expect(sleepDebt([10, 10, 9, 10, 9, 11], 9)).toEqual(4);
  });

  it("sleepDebt([8, 7, 6, 7, 6, 8], 6) should return 0", () => {
    expect(sleepDebt([8, 7, 6, 7, 6, 8], 6)).toEqual(0);
  });

  it("sleepDebt([8, 9, 10, 9, 10, 7], 7) should return 0", () => {
    expect(sleepDebt([8, 9, 10, 9, 10, 7], 7)).toEqual(0);
  });
});
