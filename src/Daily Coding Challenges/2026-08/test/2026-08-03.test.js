import { describe, expect, it } from 'vitest';

import { getEmojiPhrase } from '../2026-08-03.js';

describe('getEmojiPhrase', () => {
  it('getEmojiPhrase("🪨⭐") should return "rock star"', () => {
    expect(getEmojiPhrase('🪨⭐')).toEqual('rock star');
  });

  it('getEmojiPhrase("🥵🐕") should return "hot dog"', () => {
    expect(getEmojiPhrase('🥵🐕')).toEqual('hot dog');
  });

  it('getEmojiPhrase("👶🦈") should return "baby shark"', () => {
    expect(getEmojiPhrase('👶🦈')).toEqual('baby shark');
  });

  it('getEmojiPhrase("⭐🐟") should return "star fish"', () => {
    expect(getEmojiPhrase('⭐🐟')).toEqual('star fish');
  });

  it('getEmojiPhrase("🧊🧊👶") should return "ice ice baby"', () => {
    expect(getEmojiPhrase('🧊🧊👶')).toEqual('ice ice baby');
  });

  it('getEmojiPhrase("🐱🐟🍲") should return "cat fish soup"', () => {
    expect(getEmojiPhrase('🐱🐟🍲')).toEqual('cat fish soup');
  });
});
