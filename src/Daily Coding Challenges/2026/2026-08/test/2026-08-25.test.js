import { describe, expect, it } from 'vitest';

import { toCamelCase } from '../2026-08-25.js';

describe('toCamelCase', () => {
  it('toCamelCase("hello world") should return "helloWorld"', () => {
    expect(toCamelCase('hello world')).toEqual('helloWorld');
  });

  it('toCamelCase("HELLO WORLD") should return "helloWorld"', () => {
    expect(toCamelCase('HELLO WORLD')).toEqual('helloWorld');
  });

  it('toCamelCase("secret agent-X") should return "secretAgentX"', () => {
    expect(toCamelCase('secret agent-X')).toEqual('secretAgentX');
  });

  it('toCamelCase("FREE cODE cAMP") should return "freeCodeCamp"', () => {
    expect(toCamelCase('FREE cODE cAMP')).toEqual('freeCodeCamp');
  });

  it('toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk"', () => {
    expect(
      toCamelCase(
        'ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk',
      ),
    ).toEqual('yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk');
  });
});
