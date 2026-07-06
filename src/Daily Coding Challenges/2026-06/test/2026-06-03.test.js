import { describe, expect, it } from 'vitest';

import { isValidSchema } from '../2026-06-03.js';

describe('isValidSchema', () => {
  it('isValidSchema({ username: "henry", posts: 0, verified: true, role: "staff" }) should return true', () => {
    expect(
      isValidSchema({
        username: 'henry',
        posts: 0,
        verified: true,
        role: 'staff',
      }),
    ).toEqual(true);
  });

  it('isValidSchema({ username: "sara", posts: 45, verified: false, role: "creator", followers: 70 }) should return true', () => {
    expect(
      isValidSchema({
        username: 'sara',
        posts: 45,
        verified: false,
        role: 'creator',
        followers: 70,
      }),
    ).toEqual(true);
  });

  it('isValidSchema({ username: "penelope", posts: 20, verified: true, role: "admin" }) should return true', () => {
    expect(
      isValidSchema({
        username: 'penelope',
        posts: 20,
        verified: true,
        role: 'admin',
      }),
    ).toEqual(true);
  });

  it('isValidSchema({ username: "kevin", posts: 0, verified: false, role: "user" }) should return true', () => {
    expect(
      isValidSchema({
        username: 'kevin',
        posts: 0,
        verified: false,
        role: 'user',
      }),
    ).toEqual(true);
  });

  it('isValidSchema({ username: "george", posts: 15, verified: true, role: "moderator" }) should return true', () => {
    expect(
      isValidSchema({
        username: 'george',
        posts: 15,
        verified: true,
        role: 'moderator',
      }),
    ).toEqual(true);
  });

  it('isValidSchema({ username: "david", posts: 0, verified: false, role: "guest" }) should return false', () => {
    expect(
      isValidSchema({
        username: 'david',
        posts: 0,
        verified: false,
        role: 'guest',
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ username: "wendy", posts: 10, verified: true }) should return false', () => {
    expect(
      isValidSchema({ username: 'wendy', posts: 10, verified: true }),
    ).toEqual(false);
  });

  it('isValidSchema({ username: "fabian", posts: 1, verified: true, role: true }) should return false', () => {
    expect(
      isValidSchema({
        username: 'fabian',
        posts: 1,
        verified: true,
        role: true,
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ username: 8, posts: 1, verified: true, role: "user" }) should return false', () => {
    expect(
      isValidSchema({ username: 8, posts: 1, verified: true, role: 'user' }),
    ).toEqual(false);
  });

  it('isValidSchema({ username: "penny", posts: "10", verified: true, role: "staff" }) should return false', () => {
    expect(
      isValidSchema({
        username: 'penny',
        posts: '10',
        verified: true,
        role: 'staff',
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ username: "john", posts: "1", verified: "true", role: "admin" }) should return false', () => {
    expect(
      isValidSchema({
        username: 'john',
        posts: '1',
        verified: 'true',
        role: 'admin',
      }),
    ).toEqual(false);
  });
});
