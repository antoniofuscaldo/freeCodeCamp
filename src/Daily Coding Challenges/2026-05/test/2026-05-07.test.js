import { describe, expect, it } from 'vitest';

import { getLongestSubstring } from '../2026-05-07.js';

describe('getLongestSubstring', () => {
  it("getLongestSubstring(\"abracadabra\") should return \"abra\"", () => {
    expect(getLongestSubstring("abracadabra")).toEqual("abra");
  });

  it("getLongestSubstring(\"hello world hello\") should return \"hello\"", () => {
    expect(getLongestSubstring("hello world hello")).toEqual("hello");
  });

  it("getLongestSubstring(\"mississippi\") should return \"issi\"", () => {
    expect(getLongestSubstring("mississippi")).toEqual("issi");
  });

  it("getLongestSubstring(\"ha ha ha ha ha ha ha\") should return \"ha ha ha ha ha ha\"", () => {
    expect(getLongestSubstring("ha ha ha ha ha ha ha")).toEqual("ha ha ha ha ha ha");
  });

  it("getLongestSubstring(\"the quick brown fox jumped over the lazy dog that the quick brown fox jumped over\") should return \"the quick brown fox jumped over\"", () => {
    expect(getLongestSubstring("the quick brown fox jumped over the lazy dog that the quick brown fox jumped over")).toEqual("the quick brown fox jumped over");
  });
});
