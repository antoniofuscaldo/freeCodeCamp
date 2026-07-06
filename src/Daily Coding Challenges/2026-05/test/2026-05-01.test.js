import { describe, expect, it } from 'vitest';

import { groupAnagrams } from '../2026-05-01.js';

function canonicalize(value) {
  if (!Array.isArray(value)) {
    return value;
  }

  return value
    .map(canonicalize)
    .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
}

describe('groupAnagrams', () => {
  it('groupAnagrams(["listen", "silent", "hello", "enlist", "world"]) should return [["listen", "silent", "enlist"], ["hello"], ["world"]]', () => {
    expect(
      canonicalize(
        groupAnagrams(['listen', 'silent', 'hello', 'enlist', 'world']),
      ),
    ).toEqual(
      canonicalize([['listen', 'silent', 'enlist'], ['hello'], ['world']]),
    );
  });

  it('groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) should return [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]]', () => {
    expect(
      canonicalize(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])),
    ).toEqual(canonicalize([['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']]));
  });

  it('groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"]) should return [["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]]', () => {
    expect(
      canonicalize(
        groupAnagrams([
          'care',
          'race',
          'acre',
          'pots',
          'stop',
          'tops',
          'opts',
          'post',
          'spot',
          'evil',
          'vile',
          'live',
          'veil',
        ]),
      ),
    ).toEqual(
      canonicalize([
        ['acre', 'care', 'race'],
        ['evil', 'live', 'veil', 'vile'],
        ['opts', 'post', 'pots', 'spot', 'stop', 'tops'],
      ]),
    );
  });

  it('groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"]) should return [["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]]', () => {
    expect(
      canonicalize(
        groupAnagrams([
          'algorithms',
          'logarithms',
          'education',
          'cautioned',
          'auctioned',
          'triangle',
          'integral',
          'alerting',
          'relating',
        ]),
      ),
    ).toEqual(
      canonicalize([
        ['alerting', 'integral', 'relating', 'triangle'],
        ['algorithms', 'logarithms'],
        ['auctioned', 'cautioned', 'education'],
      ]),
    );
  });
});
