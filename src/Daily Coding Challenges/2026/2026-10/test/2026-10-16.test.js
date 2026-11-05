import { describe, expect, it } from 'vitest';

import { validate } from '../2026-10-16.js';

describe('validate', () => {
  it('validate("a@b.cd") should return true', () => {
    expect(validate('a@b.cd')).toEqual(true);
  });

  it('validate("hell.-w.rld@example.com") should return true', () => {
    expect(validate('hell.-w.rld@example.com')).toEqual(true);
  });

  it('validate(".b@sh.rc") should return false', () => {
    expect(validate('.b@sh.rc')).toEqual(false);
  });

  it('validate("example@test.c0") should return false', () => {
    expect(validate('example@test.c0')).toEqual(false);
  });

  it('validate("freecodecamp.org") should return false', () => {
    expect(validate('freecodecamp.org')).toEqual(false);
  });

  it('validate("develop.ment_user@c0D!NG.R.CKS") should return true', () => {
    expect(validate('develop.ment_user@c0D!NG.R.CKS')).toEqual(true);
  });

  it('validate("hello.@wo.rld") should return false', () => {
    expect(validate('hello.@wo.rld')).toEqual(false);
  });

  it('validate("hello@world..com") should return false', () => {
    expect(validate('hello@world..com')).toEqual(false);
  });

  it('validate("develop..ment_user@c0D!NG.R.CKS") should return false', () => {
    expect(validate('develop..ment_user@c0D!NG.R.CKS')).toEqual(false);
  });

  it('validate("git@commit@push.io") should return false', () => {
    expect(validate('git@commit@push.io')).toEqual(false);
  });
});
