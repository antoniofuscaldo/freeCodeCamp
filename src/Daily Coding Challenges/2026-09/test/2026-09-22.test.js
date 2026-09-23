import { describe, expect, it } from 'vitest';

import { digitsOrLetters } from '../2026-09-22.js';

describe('digitsOrLetters', () => {
  it('digitsOrLetters("abc123") should return "tie"', () => {
    expect(digitsOrLetters('abc123')).toEqual('tie');
  });

  it('digitsOrLetters("a1b2c3d") should return "letters"', () => {
    expect(digitsOrLetters('a1b2c3d')).toEqual('letters');
  });

  it('digitsOrLetters("1a2b3c4") should return "digits"', () => {
    expect(digitsOrLetters('1a2b3c4')).toEqual('digits');
  });

  it('digitsOrLetters("abc123!@#DEF") should return "letters"', () => {
    expect(digitsOrLetters('abc123!@#DEF')).toEqual('letters');
  });

  it('digitsOrLetters("H3110 W0R1D") should return "digits"', () => {
    expect(digitsOrLetters('H3110 W0R1D')).toEqual('digits');
  });

  it('digitsOrLetters("P455W0RD") should return "tie"', () => {
    expect(digitsOrLetters('P455W0RD')).toEqual('tie');
  });
});
