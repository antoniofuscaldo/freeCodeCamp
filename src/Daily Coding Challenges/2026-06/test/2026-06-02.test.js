import { describe, expect, it } from 'vitest';

import { isValidSchema } from '../2026-06-02.js';

describe('isValidSchema', () => {
  it('isValidSchema({ username: "alice", posts: 10, verified: false }) should return true', () => {
    expect(
      isValidSchema({ username: 'alice', posts: 10, verified: false }),
    ).toEqual(true);
  });

  it('isValidSchema({ username: "carol", posts: 15, verified: true, followers: 25 }) should return true', () => {
    expect(
      isValidSchema({
        username: 'carol',
        posts: 15,
        verified: true,
        followers: 25,
      }),
    ).toEqual(true);
  });

  it('isValidSchema({ username: "frank", posts: "21", verified: true }) should return false', () => {
    expect(
      isValidSchema({ username: 'frank', posts: '21', verified: true }),
    ).toEqual(false);
  });

  it('isValidSchema({ username: "sam", posts: 17, verified: "false" }) should return false', () => {
    expect(
      isValidSchema({ username: 'sam', posts: 17, verified: 'false' }),
    ).toEqual(false);
  });

  it('isValidSchema({ username: "bill", verified: true }) should return false', () => {
    expect(isValidSchema({ username: 'bill', verified: true })).toEqual(false);
  });

  it('isValidSchema({ username: "fred", verified: true }) should return false', () => {
    expect(isValidSchema({ username: 'fred', verified: true })).toEqual(false);
  });

  it('isValidSchema({ username: 5, posts: 10, verified: true }) should return false', () => {
    expect(isValidSchema({ username: 5, posts: 10, verified: true })).toEqual(
      false,
    );
  });
});
