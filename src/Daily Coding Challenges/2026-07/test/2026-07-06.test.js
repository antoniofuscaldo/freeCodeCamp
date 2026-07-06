import { describe, expect, it } from 'vitest';

import { getLowercaseWords } from '../2026-07-06.js';

describe('getLowercaseWords', () => {
  it('getLowercaseWords("hello GOOD world") should return "hello world"', () => {
    expect(getLowercaseWords('hello GOOD world')).toBe('hello world');
  });

  it('getLowercaseWords("these are all lowercase") should return "these are all lowercase"', () => {
    expect(getLowercaseWords('these are all lowercase')).toBe(
      'these are all lowercase',
    );
  });

  it('getLowercaseWords("less is NoT more") should return "less is more"', () => {
    expect(getLowercaseWords('less is NoT more')).toBe('less is more');
  });

  it('getLowercaseWords("DonT eat pizza every OTHER day") should return "eat pizza every day"', () => {
    expect(getLowercaseWords('DonT eat pizza every OTHER day')).toBe(
      'eat pizza every day',
    );
  });

  it('getLowercaseWords("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog") should return "the quick brown fox jumped over the lazy dog"', () => {
    expect(
      getLowercaseWords(
        'the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog',
      ),
    ).toBe('the quick brown fox jumped over the lazy dog');
  });
});
