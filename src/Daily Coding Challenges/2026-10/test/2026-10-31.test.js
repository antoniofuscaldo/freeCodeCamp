import { describe, expect, it } from 'vitest';

import { spookify } from '../2026-10-31.js';

describe('spookify', () => {
  it('spookify("hello_world") should return "HeLlO~wOrLd"', () => {
    expect(spookify('hello_world')).toEqual('HeLlO~wOrLd');
  });

  it('spookify("Spooky_Case") should return "SpOoKy~CaSe"', () => {
    expect(spookify('Spooky_Case')).toEqual('SpOoKy~CaSe');
  });

  it('spookify("TRICK-or-TREAT") should return "TrIcK~oR~tReAt"', () => {
    expect(spookify('TRICK-or-TREAT')).toEqual('TrIcK~oR~tReAt');
  });

  it('spookify("c_a-n_d-y_-b-o_w_l") should return "C~a~N~d~Y~~b~O~w~L"', () => {
    expect(spookify('c_a-n_d-y_-b-o_w_l')).toEqual('C~a~N~d~Y~~b~O~w~L');
  });

  it('spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS"', () => {
    expect(spookify('thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts')).toEqual(
      'ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS',
    );
  });
});
