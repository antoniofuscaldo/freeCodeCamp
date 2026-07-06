import { describe, expect, it } from 'vitest';

import { getGreeting } from '../2026-05-03.js';

describe('getGreeting', () => {
  it("getGreeting(\"06:30\") should return \"Good morning\"", () => {
    expect(getGreeting("06:30")).toEqual("Good morning");
  });

  it("getGreeting(\"12:00\") should return \"Good afternoon\"", () => {
    expect(getGreeting("12:00")).toEqual("Good afternoon");
  });

  it("getGreeting(\"21:59\") should return \"Good evening\"", () => {
    expect(getGreeting("21:59")).toEqual("Good evening");
  });

  it("getGreeting(\"00:01\") should return \"Good night\"", () => {
    expect(getGreeting("00:01")).toEqual("Good night");
  });

  it("getGreeting(\"11:30\") should return \"Good morning\"", () => {
    expect(getGreeting("11:30")).toEqual("Good morning");
  });
});
