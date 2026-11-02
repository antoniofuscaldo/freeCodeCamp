import { describe, expect, it } from 'vitest';

import { infected } from '../2026-11-02.js';

describe('infected', () => {
  it('infected(1) should return 2', () => {
    expect(infected(1)).toEqual(2);
  });

  it('infected(3) should return 6', () => {
    expect(infected(3)).toEqual(6);
  });

  it('infected(8) should return 152', () => {
    expect(infected(8)).toEqual(152);
  });

  it('infected(17) should return 39808', () => {
    expect(infected(17)).toEqual(39808);
  });

  it('infected(25) should return 5217638', () => {
    expect(infected(25)).toEqual(5217638);
  });
});
