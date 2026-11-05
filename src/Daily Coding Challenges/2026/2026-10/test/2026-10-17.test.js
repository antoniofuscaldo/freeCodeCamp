import { describe, expect, it } from 'vitest';

import { mask } from '../2026-10-17.js';

describe('mask', () => {
  it('mask("4012-8888-8888-1881") should return "****-****-****-1881"', () => {
    expect(mask('4012-8888-8888-1881')).toEqual('****-****-****-1881');
  });

  it('mask("5105 1051 0510 5100") should return "**** **** **** 5100"', () => {
    expect(mask('5105 1051 0510 5100')).toEqual('**** **** **** 5100');
  });

  it('mask("6011 1111 1111 1117") should return "**** **** **** 1117"', () => {
    expect(mask('6011 1111 1111 1117')).toEqual('**** **** **** 1117');
  });

  it('mask("2223-0000-4845-0010") should return "****-****-****-0010"', () => {
    expect(mask('2223-0000-4845-0010')).toEqual('****-****-****-0010');
  });
});
