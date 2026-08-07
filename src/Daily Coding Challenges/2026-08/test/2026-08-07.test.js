import { describe, expect, it } from 'vitest';

import { isValidNonogram } from '../2026-08-07.js';

describe('isValidNonogram', () => {
  it('isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1]) should return true', () => {
    expect(isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1])).toEqual(true);
  });

  it('isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1]) should return false', () => {
    expect(isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1])).toEqual(false);
  });

  it('isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1]) should return false', () => {
    expect(isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1])).toEqual(
      false,
    );
  });

  it('isValidNonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]) should return true', () => {
    expect(
      isValidNonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]),
    ).toEqual(true);
  });

  it('isValidNonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]) should return true', () => {
    expect(
      isValidNonogram(
        [3, 2, 3],
        [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      ),
    ).toEqual(true);
  });

  it('isValidNonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]) should return false', () => {
    expect(isValidNonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0])).toEqual(
      false,
    );
  });
});
