import { describe, expect, it } from 'vitest';

import { launchFuel } from '../2026-10-10.js';

describe('launchFuel', () => {
  it('launchFuel(50) should return 12.4', () => {
    expect(launchFuel(50)).toEqual(12.4);
  });

  it('launchFuel(500) should return 124.8', () => {
    expect(launchFuel(500)).toEqual(124.8);
  });

  it('launchFuel(243) should return 60.7', () => {
    expect(launchFuel(243)).toEqual(60.7);
  });

  it('launchFuel(11000) should return 2749.8', () => {
    expect(launchFuel(11000)).toEqual(2749.8);
  });

  it('launchFuel(6214) should return 1553.4', () => {
    expect(launchFuel(6214)).toEqual(1553.4);
  });
});
