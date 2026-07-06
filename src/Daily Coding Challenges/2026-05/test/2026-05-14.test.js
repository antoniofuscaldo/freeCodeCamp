import { describe, expect, it } from 'vitest';

import { isMirrorImage } from '../2026-05-14.js';

describe('isMirrorImage', () => {
  it('isMirrorImage("[HOW]", "[WOH]") should return true', () => {
    expect(isMirrorImage('[HOW]', '[WOH]')).toEqual(true);
  });

  it('isMirrorImage("MOM", "MOM") should return true', () => {
    expect(isMirrorImage('MOM', 'MOM')).toEqual(true);
  });

  it('isMirrorImage("vow", "wov") should return true', () => {
    expect(isMirrorImage('vow', 'wov')).toEqual(true);
  });

  it('isMirrorImage("TIM", "TIM") should return false', () => {
    expect(isMirrorImage('TIM', 'TIM')).toEqual(false);
  });

  it('isMirrorImage("{WOW}", "}WOW{") should return false', () => {
    expect(isMirrorImage('{WOW}', '}WOW{')).toEqual(false);
  });

  it('isMirrorImage("XXVII", "IIV%X") should return false', () => {
    expect(isMirrorImage('XXVII', 'IIV%X')).toEqual(false);
  });

  it('isMirrorImage("><(((*>", "<*)))><") should return true', () => {
    expect(isMirrorImage('><(((*>', '<*)))><')).toEqual(true);
  });

  it('isMirrorImage("WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()", "()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW") should return true', () => {
    expect(
      isMirrorImage(
        'WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()',
        '()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW',
      ),
    ).toEqual(true);
  });
});
