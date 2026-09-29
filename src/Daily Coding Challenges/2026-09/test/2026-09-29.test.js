import { describe, expect, it } from 'vitest';

import { getLongestWord } from '../2026-09-29.js';

describe('getLongestWord', () => {
  it('getLongestWord("coding is fun") should return "coding"', () => {
    expect(getLongestWord('coding is fun')).toEqual('coding');
  });

  it('getLongestWord("Coding challenges are fun and educational.") should return "educational"', () => {
    expect(
      getLongestWord('Coding challenges are fun and educational.'),
    ).toEqual('educational');
  });

  it('getLongestWord("This sentence has multiple long words.") should return "sentence"', () => {
    expect(getLongestWord('This sentence has multiple long words.')).toEqual(
      'sentence',
    );
  });
});
