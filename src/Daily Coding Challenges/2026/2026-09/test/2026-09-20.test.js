import { describe, expect, it } from 'vitest';

import { numberOfFiles } from '../2026-09-20.js';

describe('numberOfFiles', () => {
  it('numberOfFiles(500, "KB", 1) should return 2000', () => {
    expect(numberOfFiles(500, 'KB', 1)).toEqual(2000);
  });

  it('numberOfFiles(50000, "B", 1) should return 20000', () => {
    expect(numberOfFiles(50000, 'B', 1)).toEqual(20000);
  });

  it('numberOfFiles(5, "MB", 1) should return 200', () => {
    expect(numberOfFiles(5, 'MB', 1)).toEqual(200);
  });

  it('numberOfFiles(4096, "B", 1.5) should return 366210', () => {
    expect(numberOfFiles(4096, 'B', 1.5)).toEqual(366210);
  });

  it('numberOfFiles(220.5, "KB", 100) should return 453514', () => {
    expect(numberOfFiles(220.5, 'KB', 100)).toEqual(453514);
  });

  it('numberOfFiles(4.5, "MB", 750) should return 166666', () => {
    expect(numberOfFiles(4.5, 'MB', 750)).toEqual(166666);
  });
});
