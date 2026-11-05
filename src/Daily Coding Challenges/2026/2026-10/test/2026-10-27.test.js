import { describe, expect, it } from 'vitest';

import { sequence } from '../2026-10-27.js';

describe('sequence', () => {
  it('sequence(5) should return "12345"', () => {
    expect(sequence(5)).toEqual('12345');
  });

  it('sequence(10) should return "12345678910"', () => {
    expect(sequence(10)).toEqual('12345678910');
  });

  it('sequence(1) should return "1"', () => {
    expect(sequence(1)).toEqual('1');
  });

  it('sequence(27) should return "123456789101112131415161718192021222324252627"', () => {
    expect(sequence(27)).toEqual(
      '123456789101112131415161718192021222324252627',
    );
  });
});
