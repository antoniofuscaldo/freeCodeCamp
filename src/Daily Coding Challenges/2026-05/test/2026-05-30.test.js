import { describe, expect, it } from 'vitest';

import { getBestHand } from '../2026-05-30.js';

describe('getBestHand', () => {
  it("getBestHand([\"7s\", \"7h\", \"7d\", \"2c\", \"5h\"]) should return \"Three of a Kind\"", () => {
    expect(getBestHand(["7s", "7h", "7d", "2c", "5h"])).toEqual("Three of a Kind");
  });

  it("getBestHand([\"Ks\", \"Kh\", \"Kd\", \"4s\", \"4h\"]) should return \"Full House\"", () => {
    expect(getBestHand(["Ks", "Kh", "Kd", "4s", "4h"])).toEqual("Full House");
  });

  it("getBestHand([\"2h\", \"5h\", \"7h\", \"9h\", \"Jh\"]) should return \"Flush\"", () => {
    expect(getBestHand(["2h", "5h", "7h", "9h", "Jh"])).toEqual("Flush");
  });

  it("getBestHand([\"As\", \"Ah\", \"Ad\", \"Ac\", \"Kh\"]) should return \"Four of a Kind\"", () => {
    expect(getBestHand(["As", "Ah", "Ad", "Ac", "Kh"])).toEqual("Four of a Kind");
  });

  it("getBestHand([\"Ts\", \"Th\", \"9d\", \"9c\", \"8h\"]) should return \"Two Pair\"", () => {
    expect(getBestHand(["Ts", "Th", "9d", "9c", "8h"])).toEqual("Two Pair");
  });

  it("getBestHand([\"9c\", \"8c\", \"7c\", \"6c\", \"5c\"]) should return \"Straight Flush\"", () => {
    expect(getBestHand(["9c", "8c", "7c", "6c", "5c"])).toEqual("Straight Flush");
  });

  it("getBestHand([\"As\", \"Kh\", \"Jd\", \"8c\", \"5h\"]) should return \"High Card\"", () => {
    expect(getBestHand(["As", "Kh", "Jd", "8c", "5h"])).toEqual("High Card");
  });

  it("getBestHand([\"As\", \"2h\", \"3d\", \"4c\", \"5h\"]) should return \"Straight\"", () => {
    expect(getBestHand(["As", "2h", "3d", "4c", "5h"])).toEqual("Straight");
  });

  it("getBestHand([\"Ts\", \"Th\", \"7c\", \"6d\", \"5h\"]) should return \"Pair\"", () => {
    expect(getBestHand(["Ts", "Th", "7c", "6d", "5h"])).toEqual("Pair");
  });

  it("getBestHand([\"As\", \"Ks\", \"Qs\", \"Js\", \"Ts\"]) should return \"Royal Flush\"", () => {
    expect(getBestHand(["As", "Ks", "Qs", "Js", "Ts"])).toEqual("Royal Flush");
  });
});
