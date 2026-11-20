import { describe, expect, it } from 'vitest';

import { longestWord } from '../2026-11-20.js';

describe('longestWord', () => {
  it('longestWord("The quick red fox") should return "quick"', () => {
    expect(longestWord('The quick red fox')).toEqual('quick');
  });

  it('longestWord("Hello coding challenge.") should return "challenge"', () => {
    expect(longestWord('Hello coding challenge.')).toEqual('challenge');
  });

  it('longestWord("Do Try This At Home.") should return "This"', () => {
    expect(longestWord('Do Try This At Home.')).toEqual('This');
  });

  it('longestWord("This sentence... has commas, ellipses, and an exclamation point!") should return "exclamation"', () => {
    expect(
      longestWord(
        'This sentence... has commas, ellipses, and an exclamation point!',
      ),
    ).toEqual('exclamation');
  });

  it('longestWord("A tie? No way!") should return "tie"', () => {
    expect(longestWord('A tie? No way!')).toEqual('tie');
  });

  it('longestWord("Wouldn\'t you like to know.") should return "Wouldnt"', () => {
    expect(longestWord("Wouldn't you like to know.")).toEqual('Wouldnt');
  });
});
