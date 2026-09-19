import { describe, expect, it } from 'vitest';

import { numberOfPhotos } from '../2026-09-19.js';

describe('numberOfPhotos', () => {
  it('numberOfPhotos(1, 1) should return 1000', () => {
    expect(numberOfPhotos(1, 1)).toEqual(1000);
  });

  it('numberOfPhotos(2, 1) should return 500', () => {
    expect(numberOfPhotos(2, 1)).toEqual(500);
  });

  it('numberOfPhotos(4, 256) should return 64000', () => {
    expect(numberOfPhotos(4, 256)).toEqual(64000);
  });

  it('numberOfPhotos(3.5, 750) should return 214285', () => {
    expect(numberOfPhotos(3.5, 750)).toEqual(214285);
  });

  it('numberOfPhotos(3.5, 5.5) should return 1571', () => {
    expect(numberOfPhotos(3.5, 5.5)).toEqual(1571);
  });
});
