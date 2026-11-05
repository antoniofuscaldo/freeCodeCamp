import { describe, expect, it } from 'vitest';

import { repeatVowels } from '../2026-09-04.js';

describe('repeatVowels', () => {
  it('repeatVowels("hello world") should return "helloo wooorld"', () => {
    expect(repeatVowels('hello world')).toEqual('helloo wooorld');
  });

  it('repeatVowels("freeCodeCamp") should return "freeeCooodeeeeCaaaaamp"', () => {
    expect(repeatVowels('freeCodeCamp')).toEqual('freeeCooodeeeeCaaaaamp');
  });

  it('repeatVowels("AEIOU") should return "AEeIiiOoooUuuuu"', () => {
    expect(repeatVowels('AEIOU')).toEqual('AEeIiiOoooUuuuu');
  });

  it('repeatVowels("I like eating ice cream in Iceland") should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand"', () => {
    expect(repeatVowels('I like eating ice cream in Iceland')).toEqual(
      'I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand',
    );
  });
});
