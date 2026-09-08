import { describe, expect, it } from 'vitest';

import { buildAcronym } from '../2026-09-08.js';

describe('buildAcronym', () => {
  it('buildAcronym("Search Engine Optimization") should return "SEO"', () => {
    expect(buildAcronym('Search Engine Optimization')).toEqual('SEO');
  });

  it('buildAcronym("Frequently Asked Questions") should return "FAQ"', () => {
    expect(buildAcronym('Frequently Asked Questions')).toEqual('FAQ');
  });

  it('buildAcronym("National Aeronautics and Space Administration") should return "NASA"', () => {
    expect(
      buildAcronym('National Aeronautics and Space Administration'),
    ).toEqual('NASA');
  });

  it('buildAcronym("Federal Bureau of Investigation") should return "FBI"', () => {
    expect(buildAcronym('Federal Bureau of Investigation')).toEqual('FBI');
  });

  it('buildAcronym("For your information") should return "FYI"', () => {
    expect(buildAcronym('For your information')).toEqual('FYI');
  });

  it('buildAcronym("By the way") should return "BTW"', () => {
    expect(buildAcronym('By the way')).toEqual('BTW');
  });

  it('buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") should return "AUHWPOTIMSH"', () => {
    expect(
      buildAcronym(
        'An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily',
      ),
    ).toEqual('AUHWPOTIMSH');
  });
});
