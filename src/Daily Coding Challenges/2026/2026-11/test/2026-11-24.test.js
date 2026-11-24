import { describe, expect, it } from 'vitest';

import { isValidMessage } from '../2026-11-24.js';

describe('isValidMessage', () => {
  it('isValidMessage("hello world", "hw") should return true', () => {
    expect(isValidMessage('hello world', 'hw')).toEqual(true);
  });

  it('isValidMessage("ALL CAPITAL LETTERS", "acl") should return true', () => {
    expect(isValidMessage('ALL CAPITAL LETTERS', 'acl')).toEqual(true);
  });

  it('isValidMessage("Coding challenge are boring.", "cca") should return false', () => {
    expect(isValidMessage('Coding challenge are boring.', 'cca')).toEqual(
      false,
    );
  });

  it('isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD") should return true', () => {
    expect(
      isValidMessage(
        'The quick brown fox jumps over the lazy dog.',
        'TQBFJOTLD',
      ),
    ).toEqual(true);
  });

  it('isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT") should return false', () => {
    expect(
      isValidMessage(
        'The quick brown fox jumps over the lazy dog.',
        'TQBFJOTLDT',
      ),
    ).toEqual(false);
  });
});
