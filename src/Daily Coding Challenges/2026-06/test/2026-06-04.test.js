import { describe, expect, it } from 'vitest';

import { isValidSchema } from '../2026-06-04.js';

describe('isValidSchema', () => {
  it('isValidSchema({ username: "vivian", posts: 1, verified: false, role: "user", supporter: true }) should return true', () => {
    expect(
      isValidSchema({
        username: 'vivian',
        posts: 1,
        verified: false,
        role: 'user',
        supporter: true,
      }),
    ).toEqual(true);
  });

  it('isValidSchema({ username: "rudolph", posts: 15, verified: true, role: "creator" }) should return true', () => {
    expect(
      isValidSchema({
        username: 'rudolph',
        posts: 15,
        verified: true,
        role: 'creator',
      }),
    ).toEqual(true);
  });

  it('isValidSchema({ username: "hernandez", posts: 35, verified: true, role: "moderator", supporter: false, followers: 55 }) should return true', () => {
    expect(
      isValidSchema({
        username: 'hernandez',
        posts: 35,
        verified: true,
        role: 'moderator',
        supporter: false,
        followers: 55,
      }),
    ).toEqual(true);
  });

  it('isValidSchema({ username: "julia", posts: 50, verified: true, role: "admin", supporter: "true" }) should return false', () => {
    expect(
      isValidSchema({
        username: 'julia',
        posts: 50,
        verified: true,
        role: 'admin',
        supporter: 'true',
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ username: "bernard", posts: 0, verified: true, role: "friend", supporter: true }) should return false', () => {
    expect(
      isValidSchema({
        username: 'bernard',
        posts: 0,
        verified: true,
        role: 'friend',
        supporter: true,
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ username: "felix", posts: 40, verified: "yes", role: "staff", supporter: false }) should return false', () => {
    expect(
      isValidSchema({
        username: 'felix',
        posts: 40,
        verified: 'yes',
        role: 'staff',
        supporter: false,
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ username: "jimmy", posts: true, verified: false, role: "creator", supporter: true }) should return false', () => {
    expect(
      isValidSchema({
        username: 'jimmy',
        posts: true,
        verified: false,
        role: 'creator',
        supporter: true,
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ username: true, posts: 30, verified: true, role: "moderator", supporter: false }) should return false', () => {
    expect(
      isValidSchema({
        username: true,
        posts: 30,
        verified: true,
        role: 'moderator',
        supporter: false,
      }),
    ).toEqual(false);
  });
});
