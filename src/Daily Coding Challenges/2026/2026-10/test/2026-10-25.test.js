import { describe, expect, it } from 'vitest';

import { complementaryDNA } from '../2026-10-25.js';

describe('complementaryDNA', () => {
  it('complementaryDNA("ACGT") should return "TGCA"', () => {
    expect(complementaryDNA('ACGT')).toEqual('TGCA');
  });

  it('complementaryDNA("ATGCGTACGTTAGC") should return "TACGCATGCAATCG"', () => {
    expect(complementaryDNA('ATGCGTACGTTAGC')).toEqual('TACGCATGCAATCG');
  });

  it('complementaryDNA("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC"', () => {
    expect(complementaryDNA('GGCTTACGATCGAAG')).toEqual('CCGAATGCTAGCTTC');
  });

  it('complementaryDNA("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC"', () => {
    expect(complementaryDNA('GATCTAGCTAGGCTAGCTAG')).toEqual(
      'CTAGATCGATCCGATCGATC',
    );
  });
});
