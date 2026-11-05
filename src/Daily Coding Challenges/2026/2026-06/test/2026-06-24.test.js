import { describe, expect, it } from 'vitest';

import { detectMutations } from '../2026-06-24.js';

describe('detectMutations', () => {
  it('detectMutations("ATCG", "ATGG") should return [2]', () => {
    expect(detectMutations('ATCG', 'ATGG')).toEqual([2]);
  });

  it('detectMutations("ATGCGTACGTTAGC", "ATGCATACGATTGC") should return [4, 9, 11]', () => {
    expect(detectMutations('ATGCGTACGTTAGC', 'ATGCATACGATTGC')).toEqual([
      4, 9, 11,
    ]);
  });

  it('detectMutations("GATCTAGCTAGGCTAGCTAG", "GATCTAGCTAGGCTAGCTAG") should return []', () => {
    expect(
      detectMutations('GATCTAGCTAGGCTAGCTAG', 'GATCTAGCTAGGCTAGCTAG'),
    ).toEqual([]);
  });

  it('detectMutations("TCAGATCATGGCTAGCTACGATCAGCTAGCATGCATATCGACTG", "TCAGATCATGGCTAGAGCTGATCAGCTAGCATGCATATCGACTG") should return [15, 16, 17, 18]', () => {
    expect(
      detectMutations(
        'TCAGATCATGGCTAGCTACGATCAGCTAGCATGCATATCGACTG',
        'TCAGATCATGGCTAGAGCTGATCAGCTAGCATGCATATCGACTG',
      ),
    ).toEqual([15, 16, 17, 18]);
  });

  it('detectMutations("ACGTCAGTACGCACATGACCATTGACATA", "AACGTCAGTACGCACATGACCATTGACAT") should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28]', () => {
    expect(
      detectMutations(
        'ACGTCAGTACGCACATGACCATTGACATA',
        'AACGTCAGTACGCACATGACCATTGACAT',
      ),
    ).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23,
      24, 25, 26, 27, 28,
    ]);
  });
});
