import { describe, expect, it } from 'vitest';

import { numberOfVideos } from '../2026-09-21.js';

describe('numberOfVideos', () => {
  it('numberOfVideos(500, "MB", 100, "GB") should return 200', () => {
    expect(numberOfVideos(500, 'MB', 100, 'GB')).toEqual(200);
  });

  it('numberOfVideos(1, "TB", 10, "TB") should return "Invalid video unit"', () => {
    expect(numberOfVideos(1, 'TB', 10, 'TB')).toEqual('Invalid video unit');
  });

  it('numberOfVideos(2000, "MB", 100000, "MB") should return "Invalid drive unit"', () => {
    expect(numberOfVideos(2000, 'MB', 100000, 'MB')).toEqual(
      'Invalid drive unit',
    );
  });

  it('numberOfVideos(500000, "KB", 2, "TB") should return 4000', () => {
    expect(numberOfVideos(500000, 'KB', 2, 'TB')).toEqual(4000);
  });

  it('numberOfVideos(1.5, "GB", 2.2, "TB") should return 1466', () => {
    expect(numberOfVideos(1.5, 'GB', 2.2, 'TB')).toEqual(1466);
  });
});
