import { describe, expect, it } from 'vitest';

import { sendMessage } from '../2026-10-06.js';

describe('sendMessage', () => {
  it('sendMessage([300000, 300000]) should return 2.5', () => {
    expect(sendMessage([300000, 300000])).toEqual(2.5);
  });

  it('sendMessage([384400, 384400]) should return 3.0627', () => {
    expect(sendMessage([384400, 384400])).toEqual(3.0627);
  });

  it('sendMessage([54600000, 54600000]) should return 364.5', () => {
    expect(sendMessage([54600000, 54600000])).toEqual(364.5);
  });

  it('sendMessage([1000000, 500000000, 1000000]) should return 1674.3333', () => {
    expect(sendMessage([1000000, 500000000, 1000000])).toEqual(1674.3333);
  });

  it('sendMessage([10000, 21339, 50000, 31243, 10000]) should return 2.4086', () => {
    expect(sendMessage([10000, 21339, 50000, 31243, 10000])).toEqual(2.4086);
  });

  it('sendMessage([802101, 725994, 112808, 3625770, 481239]) should return 21.1597', () => {
    expect(sendMessage([802101, 725994, 112808, 3625770, 481239])).toEqual(
      21.1597,
    );
  });
});
