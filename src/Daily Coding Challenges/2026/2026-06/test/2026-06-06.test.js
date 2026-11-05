import { describe, expect, it } from 'vitest';

import { isValidSchema } from '../2026-06-06.js';

describe('isValidSchema', () => {
  it('isValidSchema({ users: [{ username: "ron", posts: 14, verified: true, role: "creator", badges: [ "early-adopter" ]}, { username: "cher", posts: 25, verified: true, role: "moderator", supporter: true, followers: 20, badges: [ "helper" ]}]}) should return true', () => {
    expect(
      isValidSchema({
        users: [
          {
            username: 'ron',
            posts: 14,
            verified: true,
            role: 'creator',
            badges: ['early-adopter'],
          },
          {
            username: 'cher',
            posts: 25,
            verified: true,
            role: 'moderator',
            supporter: true,
            followers: 20,
            badges: ['helper'],
          },
        ],
      }),
    ).toEqual(true);
  });

  it('isValidSchema({ users: [] }) should return true', () => {
    expect(isValidSchema({ users: [] })).toEqual(true);
  });

  it('isValidSchema({ users: { username: "anne", posts: 0, verified: false, role: "user", supporter: false, badges: []}}) should return false', () => {
    expect(
      isValidSchema({
        users: {
          username: 'anne',
          posts: 0,
          verified: false,
          role: 'user',
          supporter: false,
          badges: [],
        },
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ users: [{ username: "tony", posts: 10, verified: true, role: "creator", supporter: true, badges: ["liked", 6]}]}) should return false', () => {
    expect(
      isValidSchema({
        users: [
          {
            username: 'tony',
            posts: 10,
            verified: true,
            role: 'creator',
            supporter: true,
            badges: ['liked', 6],
          },
        ],
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ users: [{ username: "ursula", posts: 3, verified: false, role: "user", supporter: "false", badges: ["comeback"]}]}) should return false', () => {
    expect(
      isValidSchema({
        users: [
          {
            username: 'ursula',
            posts: 3,
            verified: false,
            role: 'user',
            supporter: 'false',
            badges: ['comeback'],
          },
        ],
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ users: [{ username: "benny", posts: 55, verified: true, role: "superstar", supporter: true, badges: ["veteran"]}]}) should return false', () => {
    expect(
      isValidSchema({
        users: [
          {
            username: 'benny',
            posts: 55,
            verified: true,
            role: 'superstar',
            supporter: true,
            badges: ['veteran'],
          },
        ],
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ users: [{ username: "chase", posts: 1, verified: "yes", role: "staff", supporter: false, badges: ["superstar"]}]}) should return false', () => {
    expect(
      isValidSchema({
        users: [
          {
            username: 'chase',
            posts: 1,
            verified: 'yes',
            role: 'staff',
            supporter: false,
            badges: ['superstar'],
          },
        ],
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ users: [{ username: "carla", posts: "10", verified: false, role: "user", supporter: false, badges: ["newbie"]}]}) should return false', () => {
    expect(
      isValidSchema({
        users: [
          {
            username: 'carla',
            posts: '10',
            verified: false,
            role: 'user',
            supporter: false,
            badges: ['newbie'],
          },
        ],
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ users: [{ posts: 4, verified: false, role: "admin", supporter: false, badges: ["superuser", "veteran"]}]}) should return false', () => {
    expect(
      isValidSchema({
        users: [
          {
            posts: 4,
            verified: false,
            role: 'admin',
            supporter: false,
            badges: ['superuser', 'veteran'],
          },
        ],
      }),
    ).toEqual(false);
  });

  it('isValidSchema({ users: [{ username: "harold", posts: 80, verified: true, role: "creator", supporter: true, badges: ["liked", "hero"]}, { username: "kim", posts: 11, verified: false, role: "admin", supporter: true, badges: ["first"]}, {}]}) should return false', () => {
    expect(
      isValidSchema({
        users: [
          {
            username: 'harold',
            posts: 80,
            verified: true,
            role: 'creator',
            supporter: true,
            badges: ['liked', 'hero'],
          },
          {
            username: 'kim',
            posts: 11,
            verified: false,
            role: 'admin',
            supporter: true,
            badges: ['first'],
          },
          {},
        ],
      }),
    ).toEqual(false);
  });
});
