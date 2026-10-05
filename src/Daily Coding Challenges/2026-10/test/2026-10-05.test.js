import { describe, expect, it } from 'vitest';

import { hasExoplanet } from '../2026-10-05.js';

describe('hasExoplanet', () => {
  it('hasExoplanet("665544554") should return false', () => {
    expect(hasExoplanet('665544554')).toEqual(false);
  });

  it('hasExoplanet("FGFFCFFGG") should return true', () => {
    expect(hasExoplanet('FGFFCFFGG')).toEqual(true);
  });

  it('hasExoplanet("MONOPLONOMONPLNOMPNOMP") should return false', () => {
    expect(hasExoplanet('MONOPLONOMONPLNOMPNOMP')).toEqual(false);
  });

  it('hasExoplanet("FREECODECAMP") should return true', () => {
    expect(hasExoplanet('FREECODECAMP')).toEqual(true);
  });

  it('hasExoplanet("9AB98AB9BC98A") should return false', () => {
    expect(hasExoplanet('9AB98AB9BC98A')).toEqual(false);
  });

  it('hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") should return true', () => {
    expect(hasExoplanet('ZXXWYZXYWYXZEGZXWYZXYGEE')).toEqual(true);
  });
});
