import { describe, expect, it } from 'vitest';

import { isValidSchema } from '../2026-06-01.js';

describe('isValidSchema', () => {
  it('isValidSchema({ username: "bob" }) should return true', () => {
    expect(isValidSchema({ username: 'bob' })).toEqual(true);
  });

  it('isValidSchema({ username: "jen", posts: 30 }) should return true', () => {
    expect(isValidSchema({ username: 'jen', posts: 30 })).toEqual(true);
  });

  it('isValidSchema({ username: "" }) should return true', () => {
    expect(isValidSchema({ username: '' })).toEqual(true);
  });

  it('isValidSchema({ username: 7 }) should return false', () => {
    expect(isValidSchema({ username: 7 })).toEqual(false);
  });

  it('isValidSchema({ posts: 25 }) should return false', () => {
    expect(isValidSchema({ posts: 25 })).toEqual(false);
  });
});
