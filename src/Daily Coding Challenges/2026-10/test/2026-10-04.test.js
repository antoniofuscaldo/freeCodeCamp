import { describe, expect, it } from 'vitest';

import { classification } from '../2026-10-04.js';

describe('classification', () => {
  it('classification(5778) should return "G"', () => {
    expect(classification(5778)).toEqual('G');
  });

  it('classification(2400) should return "M"', () => {
    expect(classification(2400)).toEqual('M');
  });

  it('classification(9999) should return "A"', () => {
    expect(classification(9999)).toEqual('A');
  });

  it('classification(3700) should return "K"', () => {
    expect(classification(3700)).toEqual('K');
  });

  it('classification(3699) should return "M"', () => {
    expect(classification(3699)).toEqual('M');
  });

  it('classification(210000) should return "O"', () => {
    expect(classification(210000)).toEqual('O');
  });

  it('classification(6000) should return "F"', () => {
    expect(classification(6000)).toEqual('F');
  });

  it('classification(11432) should return "B"', () => {
    expect(classification(11432)).toEqual('B');
  });
});
