import { describe, expect, it } from 'vitest';

import { getPeriodicSpelling } from '../2026-06-27.js';

describe('getPeriodicSpelling', () => {
  it('getPeriodicSpelling("neon") should return ["Ne", "O", "N"]', () => {
    expect(getPeriodicSpelling('neon')).toEqual(['Ne', 'O', 'N']);
  });

  it('getPeriodicSpelling("rational") should return ["Ra", "Ti", "O", "N", "Al"]', () => {
    expect(getPeriodicSpelling('rational')).toEqual([
      'Ra',
      'Ti',
      'O',
      'N',
      'Al',
    ]);
  });

  it('getPeriodicSpelling("yarn") should return ["Y", "Ar", "N"]', () => {
    expect(getPeriodicSpelling('yarn')).toEqual(['Y', 'Ar', 'N']);
  });

  it('getPeriodicSpelling("carbon") should return ["C", "Ar", "B", "O", "N"] or ["Ca", "Rb", "O", "N"]', () => {
    const expectedResults = [
      ['C', 'Ar', 'B', 'O', 'N'],
      ['Ca', 'Rb', 'O', 'N'],
    ];

    expect(expectedResults).toContainEqual(getPeriodicSpelling('carbon'));
  });

  it('getPeriodicSpelling("noisy") should return ["N", "O", "I", "S", "Y"] or ["No", "I", "S", "Y"]', () => {
    const expectedResults = [
      ['N', 'O', 'I', 'S', 'Y'],
      ['No', 'I', 'S', 'Y'],
    ];

    expect(expectedResults).toContainEqual(getPeriodicSpelling('noisy'));
  });

  it('getPeriodicSpelling("bicycles") should return ["B", "I", "C", "Y", "Cl", "Es"] or ["Bi", "C", "Y", "Cl", "Es"]', () => {
    const expectedResults = [
      ['B', 'I', 'C', 'Y', 'Cl', 'Es'],
      ['Bi', 'C', 'Y', 'Cl', 'Es'],
    ];

    expect(expectedResults).toContainEqual(getPeriodicSpelling('bicycles'));
  });

  it('getPeriodicSpelling("optics") should return ["O", "P", "Ti", "C", "S"], ["O", "P", "Ti", "Cs"], ["O", "Pt", "I", "C", "S"], or ["O", "Pt", "I", "Cs"]', () => {
    const expectedResults = [
      ['O', 'P', 'Ti', 'C', 'S'],
      ['O', 'P', 'Ti', 'Cs'],
      ['O', 'Pt', 'I', 'C', 'S'],
      ['O', 'Pt', 'I', 'Cs'],
    ];

    expect(expectedResults).toContainEqual(getPeriodicSpelling('optics'));
  });

  it('getPeriodicSpelling("value") should return []', () => {
    expect(getPeriodicSpelling('value')).toEqual([]);
  });
});
