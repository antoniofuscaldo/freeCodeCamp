import { describe, expect, it } from 'vitest';

import { triageIssue } from '../2026-07-08.js';

describe('triageIssue', () => {
  it('triageIssue(86400000, "Lets fix it") should return "leave it"', () => {
    expect(triageIssue(86400000, 'Lets fix it')).toEqual('leave it');
  });

  it('triageIssue(1209600000, "still waiting") should return "bump it"', () => {
    expect(triageIssue(1209600000, 'still waiting')).toEqual('bump it');
  });

  it('triageIssue(864000000, "bump") should return "close it"', () => {
    expect(triageIssue(864000000, 'bump')).toEqual('close it');
  });

  it('triageIssue(604800000, "Do we still want this?") should return "bump it"', () => {
    expect(triageIssue(604800000, 'Do we still want this?')).toEqual('bump it');
  });

  it('triageIssue(604800000, "Bumping this") should return "close it"', () => {
    expect(triageIssue(604800000, 'Bumping this')).toEqual('close it');
  });

  it('triageIssue(345600000, "I\'ll make a PR") should return "leave it"', () => {
    expect(triageIssue(345600000, "I'll make a PR")).toEqual('leave it');
  });
});
