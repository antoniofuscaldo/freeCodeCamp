import { describe, expect, it } from 'vitest';

import { spaceJam } from '../2026-08-14.js';

describe('spaceJam', () => {
  it('spaceJam("freeCodeCamp") should return "F  R  E  E  C  O  D  E  C  A  M  P"', () => {
    expect(spaceJam('freeCodeCamp')).toEqual(
      'F  R  E  E  C  O  D  E  C  A  M  P',
    );
  });

  it('spaceJam("   free   Code   Camp   ") should return "F  R  E  E  C  O  D  E  C  A  M  P"', () => {
    expect(spaceJam('   free   Code   Camp   ')).toEqual(
      'F  R  E  E  C  O  D  E  C  A  M  P',
    );
  });

  it('spaceJam("Hello World?!") should return "H  E  L  L  O  W  O  R  L  D  ?  !"', () => {
    expect(spaceJam('Hello World?!')).toEqual(
      'H  E  L  L  O  W  O  R  L  D  ?  !',
    );
  });

  it('spaceJam("C@t$ & D0g$") should return "C  @  T  $  &  D  0  G  $"', () => {
    expect(spaceJam('C@t$ & D0g$')).toEqual('C  @  T  $  &  D  0  G  $');
  });

  it('spaceJam("allyourbase") should return "A  L  L  Y  O  U  R  B  A  S  E"', () => {
    expect(spaceJam('allyourbase')).toEqual('A  L  L  Y  O  U  R  B  A  S  E');
  });
});
