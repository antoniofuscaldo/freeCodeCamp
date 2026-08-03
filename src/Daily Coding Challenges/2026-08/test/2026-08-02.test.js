import { describe, expect, it } from 'vitest';

import { getFoodChain } from '../2026-08-02.js';

describe('getFoodChain', () => {
  it('getFoodChain([["cat", "mouse"]]) should return ["cat", "mouse"]', () => {
    expect(getFoodChain([['cat', 'mouse']])).toEqual(['cat', 'mouse']);
  });

  it('getFoodChain([["wolf", "deer"], ["deer", "grass"]]) should return ["wolf", "deer", "grass"]', () => {
    expect(
      getFoodChain([
        ['wolf', 'deer'],
        ['deer', 'grass'],
      ]),
    ).toEqual(['wolf', 'deer', 'grass']);
  });

  it('getFoodChain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]]) should return ["hawk", "snake", "frog", "fly"]', () => {
    expect(
      getFoodChain([
        ['hawk', 'snake'],
        ['snake', 'frog'],
        ['frog', 'fly'],
      ]),
    ).toEqual(['hawk', 'snake', 'frog', 'fly']);
  });

  it('getFoodChain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]]) should return ["eagle", "fox", "rabbit", "grass"]', () => {
    expect(
      getFoodChain([
        ['rabbit', 'grass'],
        ['fox', 'rabbit'],
        ['eagle', 'fox'],
      ]),
    ).toEqual(['eagle', 'fox', 'rabbit', 'grass']);
  });

  it('getFoodChain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]]) should return ["orca", "seal", "salmon", "herring", "shrimp", "plankton"]', () => {
    expect(
      getFoodChain([
        ['seal', 'salmon'],
        ['herring', 'shrimp'],
        ['orca', 'seal'],
        ['shrimp', 'plankton'],
        ['salmon', 'herring'],
      ]),
    ).toEqual(['orca', 'seal', 'salmon', 'herring', 'shrimp', 'plankton']);
  });
});
