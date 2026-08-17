import { describe, expect, it } from 'vitest';

import { jbelmu } from '../2026-08-15.js';

describe('jbelmu', () => {
  it('jbelmu("hello world") should return "hello wlord"', () => {
    expect(jbelmu('hello world')).toEqual('hello wlord');
  });

  it('jbelmu("i love jumbled text") should return "i love jbelmud text"', () => {
    expect(jbelmu('i love jumbled text')).toEqual('i love jbelmud text');
  });

  it('jbelmu("freecodecamp is my favorite place to learn to code") should return "faccdeeemorp is my faiortve pacle to laern to cdoe"', () => {
    expect(
      jbelmu('freecodecamp is my favorite place to learn to code'),
    ).toEqual('faccdeeemorp is my faiortve pacle to laern to cdoe');
  });

  it('jbelmu("the quick brown fox jumps over the lazy dog") should return "the qciuk borwn fox jmpus oevr the lazy dog"', () => {
    expect(jbelmu('the quick brown fox jumps over the lazy dog')).toEqual(
      'the qciuk borwn fox jmpus oevr the lazy dog',
    );
  });
});
