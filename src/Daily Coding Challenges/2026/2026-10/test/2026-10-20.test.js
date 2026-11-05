import { describe, expect, it } from 'vitest';

import { calculateTips } from '../2026-10-20.js';

describe('calculateTips', () => {
  it('calculateTips("$10.00", "25%") should return ["$1.50", "$2.00", "$2.50"]', () => {
    expect(calculateTips('$10.00', '25%')).toEqual(['$1.50', '$2.00', '$2.50']);
  });

  it('calculateTips("$89.67", "26%") should return ["$13.45", "$17.93", "$23.31"]', () => {
    expect(calculateTips('$89.67', '26%')).toEqual([
      '$13.45',
      '$17.93',
      '$23.31',
    ]);
  });

  it('calculateTips("$19.85", "9%") should return ["$2.98", "$3.97", "$1.79"]', () => {
    expect(calculateTips('$19.85', '9%')).toEqual(['$2.98', '$3.97', '$1.79']);
  });
});
