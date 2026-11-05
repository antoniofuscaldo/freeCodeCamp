import { describe, expect, it } from 'vitest';

import { isValidIsbn13 } from '../2026-05-10.js';

describe('isValidIsbn13', () => {
  it('isValidIsbn13("9780306406157") should return true', () => {
    expect(isValidIsbn13('9780306406157')).toEqual(true);
  });

  it('isValidIsbn13("97803064061570") should return false', () => {
    expect(isValidIsbn13('97803064061570')).toEqual(false);
  });

  it('isValidIsbn13("978-0-13-595705-9") should return true', () => {
    expect(isValidIsbn13('978-0-13-595705-9')).toEqual(true);
  });

  it('isValidIsbn13("978-030-64061A-4") should return false', () => {
    expect(isValidIsbn13('978-030-64061A-4')).toEqual(false);
  });

  it('isValidIsbn13("9-7-8-0-1-3-4-7-5-7-5-9-9") should return true', () => {
    expect(isValidIsbn13('9-7-8-0-1-3-4-7-5-7-5-9-9')).toEqual(true);
  });
});
