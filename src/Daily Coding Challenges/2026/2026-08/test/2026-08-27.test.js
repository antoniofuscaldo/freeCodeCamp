import { describe, expect, it } from 'vitest';

import { evaluate } from '../2026-08-27.js';

describe('evaluate', () => {
  it("evaluate([5, 6, 7, 8, 9], ['+', '-']) should return 3", () => {
    expect(evaluate([5, 6, 7, 8, 9], ['+', '-'])).toEqual(3);
  });

  it("evaluate([17, 61, 40, 24, 38, 14], ['+', '%']) should return 38", () => {
    expect(evaluate([17, 61, 40, 24, 38, 14], ['+', '%'])).toEqual(38);
  });

  it("evaluate([20, 2, 4, 24, 12, 3], ['*', '/']) should return 60", () => {
    expect(evaluate([20, 2, 4, 24, 12, 3], ['*', '/'])).toEqual(60);
  });

  it("evaluate([11, 4, 10, 17, 2], ['*', '*', '%']) should return 30", () => {
    expect(evaluate([11, 4, 10, 17, 2], ['*', '*', '%'])).toEqual(30);
  });

  it("evaluate([33, 11, 29, 13], ['/', '-']) should return -2", () => {
    expect(evaluate([33, 11, 29, 13], ['/', '-'])).toEqual(-2);
  });
});
