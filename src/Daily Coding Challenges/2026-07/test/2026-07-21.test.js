import { describe, expect, it } from 'vitest';

import { blendWords } from '../2026-07-21.js';

describe('blendWords', () => {
  it('blendWords("turtle", "toucan") should return "turcan"', () => {
    expect(blendWords('turtle', 'toucan')).toEqual('turcan');
  });

  it('blendWords("chipmunk", "flamingo") should return "chipingo"', () => {
    expect(blendWords('chipmunk', 'flamingo')).toEqual('chipingo');
  });

  it('blendWords("falcon", "pelican") should return "falican"', () => {
    expect(blendWords('falcon', 'pelican')).toEqual('falican');
  });

  it('blendWords("hyena", "iguana") should return "hyana"', () => {
    expect(blendWords('hyena', 'iguana')).toEqual('hyana');
  });

  it('blendWords("scorpion", "gorilla") should return "scorilla"', () => {
    expect(blendWords('scorpion', 'gorilla')).toEqual('scorilla');
  });

  it('blendWords("platypus", "wolverine") should return "platerine"', () => {
    expect(blendWords('platypus', 'wolverine')).toEqual('platerine');
  });
});
