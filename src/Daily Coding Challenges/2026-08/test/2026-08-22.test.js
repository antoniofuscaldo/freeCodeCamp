import { describe, expect, it } from 'vitest';

import { decode } from '../2026-08-22.js';

describe('decode', () => {
  it('decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."', () => {
    expect(decode('Xlmw mw e wigvix qiwweki.', 4)).toEqual(
      'This is a secret message.',
    );
  });

  it('decode("Byffi Qilfx!", 20) should return "Hello World!"', () => {
    expect(decode('Byffi Qilfx!', 20)).toEqual('Hello World!');
  });

  it('decode("Zqd xnt njzx?", -1) should return "Are you okay?"', () => {
    expect(decode('Zqd xnt njzx?', -1)).toEqual('Are you okay?');
  });

  it('decode("oannLxmnLjvy", 9) should return "freeCodeCamp"', () => {
    expect(decode('oannLxmnLjvy', 9)).toEqual('freeCodeCamp');
  });
});
