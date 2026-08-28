import { describe, expect, it } from 'vitest';

import { decode } from '../2026-08-26.js';

describe('decode', () => {
  it('decode("(f(b(dc)e)a)") should return "abcdef"', () => {
    expect(decode('(f(b(dc)e)a)')).toEqual('abcdef');
  });

  it('decode("((is?)(a(t d)h)e(n y( uo)r)aC)") should return "Can you read this?"', () => {
    expect(decode('((is?)(a(t d)h)e(n y( uo)r)aC)')).toEqual(
      'Can you read this?',
    );
  });

  it('decode("f(Ce(re))o((e(aC)m)d)p") should return "freeCodeCamp"', () => {
    expect(decode('f(Ce(re))o((e(aC)m)d)p')).toEqual('freeCodeCamp');
  });
});
