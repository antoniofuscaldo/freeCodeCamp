import { describe, expect, it } from 'vitest';

import { costToFill } from '../2026-09-18.js';

describe('costToFill', () => {
  it('costToFill(20, 0, 4.00) should return "$80.00"', () => {
    expect(costToFill(20, 0, 4.0)).toEqual('$80.00');
  });

  it('costToFill(15, 10, 3.50) should return "$17.50"', () => {
    expect(costToFill(15, 10, 3.5)).toEqual('$17.50');
  });

  it('costToFill(18, 9, 3.25) should return "$29.25"', () => {
    expect(costToFill(18, 9, 3.25)).toEqual('$29.25');
  });

  it('costToFill(12, 12, 4.99) should return "$0.00"', () => {
    expect(costToFill(12, 12, 4.99)).toEqual('$0.00');
  });

  it('costToFill(15, 9.5, 3.98) should return "$21.89"', () => {
    expect(costToFill(15, 9.5, 3.98)).toEqual('$21.89');
  });
});
