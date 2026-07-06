import { describe, expect, it } from 'vitest';

import { iBeforeE } from '../2026-05-21.js';

describe('iBeforeE', () => {
  it('iBeforeE("beleive") should return "believe"', () => {
    expect(iBeforeE('beleive')).toEqual('believe');
  });

  it('iBeforeE("recieve") should return "receive"', () => {
    expect(iBeforeE('recieve')).toEqual('receive');
  });

  it('iBeforeE("we recieved a breif") should return "we received a brief"', () => {
    expect(iBeforeE('we recieved a breif')).toEqual('we received a brief');
  });

  it('iBeforeE("she beleived the friendly niece could percieve the greif") should return "she believed the friendly niece could perceive the grief"', () => {
    expect(
      iBeforeE('she beleived the friendly niece could percieve the greif'),
    ).toEqual('she believed the friendly niece could perceive the grief');
  });

  it('iBeforeE("we recieved relief after the theif gave us a breif piece of feirce deceit") should return "we received relief after the thief gave us a brief piece of fierce deceit"', () => {
    expect(
      iBeforeE(
        'we recieved relief after the theif gave us a breif piece of feirce deceit',
      ),
    ).toEqual(
      'we received relief after the thief gave us a brief piece of fierce deceit',
    );
  });
});
