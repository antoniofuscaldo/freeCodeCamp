import { describe, expect, it } from 'vitest';

import { getItineraryCount } from '../2026-06-10.js';

describe('getItineraryCount', () => {
  it('getItineraryCount(["library", "park"]) should return 2', () => {
    expect(getItineraryCount(['library', 'park'])).toEqual(2);
  });

  it('getItineraryCount(["library", "park", "arcade"]) should return 18', () => {
    expect(getItineraryCount(['library', 'park', 'arcade'])).toEqual(18);
  });

  it('getItineraryCount(["library", "park", "arcade", "store"]) should return 120', () => {
    expect(getItineraryCount(['library', 'park', 'arcade', 'store'])).toEqual(
      120,
    );
  });

  it('getItineraryCount(["library", "park", "arcade", "store", "cafe"]) should return 840', () => {
    expect(
      getItineraryCount(['library', 'park', 'arcade', 'store', 'cafe']),
    ).toEqual(840);
  });

  it('getItineraryCount(["library", "park", "arcade", "store", "cafe", "market", "museum"]) should return 55440', () => {
    expect(
      getItineraryCount([
        'library',
        'park',
        'arcade',
        'store',
        'cafe',
        'market',
        'museum',
      ]),
    ).toEqual(55440);
  });
});
