import { describe, expect, it } from 'vitest';

import { groupAnagrams } from '../2026-05-01.js';

describe('groupAnagrams', () => {
  it("groupAnagrams([\"listen\", \"silent\", \"hello\", \"enlist\", \"world\"]) should return [[\"listen\", \"silent\", \"enlist\"], [\"hello\"], [\"world\"]]", () => {
    expect(groupAnagrams(["listen", "silent", "hello", "enlist", "world"])).toEqual([["listen", "silent", "enlist"], ["hello"], ["world"]]);
  });

  it("groupAnagrams([\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]) should return [[\"ate\", \"eat\", \"tea\"], [\"bat\"], [\"nat\", \"tan\"]]", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([["ate", "eat", "tea"], ["bat"], ["nat", "tan"]]);
  });

  it("groupAnagrams([\"care\", \"race\", \"acre\", \"pots\", \"stop\", \"tops\", \"opts\", \"post\", \"spot\", \"evil\", \"vile\", \"live\", \"veil\"]) should return [[\"acre\", \"care\", \"race\"], [\"evil\", \"live\", \"veil\", \"vile\"], [\"opts\", \"post\", \"pots\", \"spot\", \"stop\", \"tops\"]]", () => {
    expect(groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"])).toEqual([["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]]);
  });

  it("groupAnagrams([\"algorithms\", \"logarithms\", \"education\", \"cautioned\", \"auctioned\", \"triangle\", \"integral\", \"alerting\", \"relating\"]) should return [[\"alerting\", \"integral\", \"relating\", \"triangle\"], [\"algorithms\", \"logarithms\"], [\"auctioned\", \"cautioned\", \"education\"]]", () => {
    expect(groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"])).toEqual([["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]]);
  });
});
