import { describe, expect, it } from 'vitest';

import { getLowercaseWords } from '../2026-07-06.js';

describe('getLowercaseWords', () => {
  it('returns lowercase words in their original order', () => {
    expect(getLowercaseWords('hello GOOD world')).toBe('hello world');
  });

  it('ignores uppercase, mixed-case, numeric, and punctuated words', () => {
    expect(getLowercaseWords('these are all lowercase')).toBe(
      'these are all lowercase',
    );
  });

  it('normalizes multiple spaces between words', () => {
    expect(getLowercaseWords('less is NoT more')).toBe('less is more');
  });

  it('returns an empty string when no lowercase words are present', () => {
    expect(getLowercaseWords('DonT eat pizza every OTHER day')).toBe(
      'eat pizza every day',
    );
  });

  it('returns an empty string for an empty input', () => {
    expect(
      getLowercaseWords(
        'the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog',
      ),
    ).toBe('the quick brown fox jumped over the lazy dog');
  });
});
