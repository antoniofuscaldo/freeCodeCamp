import { describe, expect, it } from 'vitest';

import { formatNumber } from '../2026-09-30.js';

describe('formatNumber', () => {
  it('formatNumber("05552340182") should return "+0 (555) 234-0182"', () => {
    expect(formatNumber('05552340182')).toEqual('+0 (555) 234-0182');
  });

  it('formatNumber("15554354792") should return "+1 (555) 435-4792"', () => {
    expect(formatNumber('15554354792')).toEqual('+1 (555) 435-4792');
  });
});
