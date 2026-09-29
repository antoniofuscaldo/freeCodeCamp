import { describe, expect, it } from 'vitest';

import { getHeadings } from '../2026-09-28.js';

describe('getHeadings', () => {
  it('getHeadings("name,age,city") should return ["name", "age", "city"]', () => {
    expect(getHeadings('name,age,city')).toEqual(['name', 'age', 'city']);
  });

  it('getHeadings("first name,last name,phone") should return ["first name", "last name", "phone"]', () => {
    expect(getHeadings('first name,last name,phone')).toEqual([
      'first name',
      'last name',
      'phone',
    ]);
  });

  it('getHeadings("username , email , signup date ") should return ["username", "email", "signup date"]', () => {
    expect(getHeadings('username , email , signup date ')).toEqual([
      'username',
      'email',
      'signup date',
    ]);
  });
});
