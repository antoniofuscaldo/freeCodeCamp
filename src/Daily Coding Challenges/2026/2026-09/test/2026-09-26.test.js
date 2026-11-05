import { describe, expect, it } from 'vitest';

import { speeding } from '../2026-09-26.js';

describe('speeding', () => {
  it('speeding([50, 60, 55], 60) should return [0, 0]', () => {
    expect(speeding([50, 60, 55], 60)).toEqual([0, 0]);
  });

  it('speeding([58, 50, 60, 55], 55) should return [2, 4]', () => {
    expect(speeding([58, 50, 60, 55], 55)).toEqual([2, 4]);
  });

  it('speeding([61, 81, 74, 88, 65, 71, 68], 70) should return [4, 8.5]', () => {
    expect(speeding([61, 81, 74, 88, 65, 71, 68], 70)).toEqual([4, 8.5]);
  });

  it('speeding([100, 105, 95, 102], 100) should return [2, 3.5]', () => {
    expect(speeding([100, 105, 95, 102], 100)).toEqual([2, 3.5]);
  });

  it('speeding([40, 45, 44, 50, 112, 39], 55) should return [1, 57]', () => {
    expect(speeding([40, 45, 44, 50, 112, 39], 55)).toEqual([1, 57]);
  });
});
