import { describe, expect, it } from 'vitest';

import { verify } from '../2026-11-01.js';

describe('verify', () => {
  it('verify("foo", "bar", 57) should return true', () => {
    expect(verify('foo', 'bar', 57)).toEqual(true);
  });

  it('verify("foo", "bar", 54) should return false', () => {
    expect(verify('foo', 'bar', 54)).toEqual(false);
  });

  it('verify("freeCodeCamp", "Rocks", 238) should return true', () => {
    expect(verify('freeCodeCamp', 'Rocks', 238)).toEqual(true);
  });

  it('verify("Is this valid?", "No", 210) should return false', () => {
    expect(verify('Is this valid?', 'No', 210)).toEqual(false);
  });

  it('verify("Is this valid?", "Yes", 233) should return true', () => {
    expect(verify('Is this valid?', 'Yes', 233)).toEqual(true);
  });

  it('verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514) should return true', () => {
    expect(
      verify('Check out the freeCodeCamp podcast,', 'in the mobile app', 514),
    ).toEqual(true);
  });
});
