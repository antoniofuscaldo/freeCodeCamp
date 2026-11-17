import { describe, expect, it } from 'vitest';

import { isMatch } from '../2026-11-17.js';

describe('isMatch', () => {
  it('isMatch("helloworld", "helloworld") should return true', () => {
    expect(isMatch('helloworld', 'helloworld')).toEqual(true);
  });

  it('isMatch("helloworld", "helloworlds") should return false', () => {
    expect(isMatch('helloworld', 'helloworlds')).toEqual(false);
  });

  it('isMatch("helloworld", "jelloworld") should return true', () => {
    expect(isMatch('helloworld', 'jelloworld')).toEqual(true);
  });

  it('isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") should return true', () => {
    expect(
      isMatch(
        'thequickbrownfoxjumpsoverthelazydog',
        'thequickbrownfoxjumpsoverthelazydog',
      ),
    ).toEqual(true);
  });

  it('isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") should return true', () => {
    expect(
      isMatch(
        'theslickbrownfoxjumpsoverthelazydog',
        'thequickbrownfoxjumpsoverthehazydog',
      ),
    ).toEqual(true);
  });

  it('isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") should return false', () => {
    expect(
      isMatch(
        'thequickbrownfoxjumpsoverthelazydog',
        'thequickbrownfoxjumpsoverthehazycat',
      ),
    ).toEqual(false);
  });
});
