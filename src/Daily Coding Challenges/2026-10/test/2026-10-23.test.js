import { describe, expect, it } from 'vitest';

import { favoriteSongs } from '../2026-10-23.js';

describe('favoriteSongs', () => {
  it('favoriteSongs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ]) should return ["Sync or Swim", "Earbud Blues"]', () => {
    expect(
      favoriteSongs([
        { title: 'Sync or Swim', plays: 3 },
        { title: 'Byte Me', plays: 1 },
        { title: 'Earbud Blues', plays: 2 },
      ]),
    ).toEqual(['Sync or Swim', 'Earbud Blues']);
  });

  it('favoriteSongs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100} ]) should return ["Clickwheel Love", "99 Downloads"]', () => {
    expect(
      favoriteSongs([
        { title: 'Skip Track', plays: 98 },
        { title: '99 Downloads', plays: 99 },
        { title: 'Clickwheel Love', plays: 100 },
      ]),
    ).toEqual(['Clickwheel Love', '99 Downloads']);
  });

  it('favoriteSongs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75} ]) should return ["Song B", "Song C"]', () => {
    expect(
      favoriteSongs([
        { title: 'Song A', plays: 42 },
        { title: 'Song B', plays: 99 },
        { title: 'Song C', plays: 75 },
      ]),
    ).toEqual(['Song B', 'Song C']);
  });
});
