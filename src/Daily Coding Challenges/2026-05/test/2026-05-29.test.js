import { describe, expect, it } from 'vitest';

import { getWiderAspectRatio } from '../2026-05-29.js';

describe('getWiderAspectRatio', () => {
  it('getWiderAspectRatio("1920x1080", "800x600") should return "16:9"', () => {
    expect(getWiderAspectRatio('1920x1080', '800x600')).toEqual('16:9');
  });

  it('getWiderAspectRatio("1080x1350", "2048x1536") should return "4:3"', () => {
    expect(getWiderAspectRatio('1080x1350', '2048x1536')).toEqual('4:3');
  });

  it('getWiderAspectRatio("640x480", "2440x1220") should return "2:1"', () => {
    expect(getWiderAspectRatio('640x480', '2440x1220')).toEqual('2:1');
  });

  it('getWiderAspectRatio("360x640", "1080x1920") should return "9:16"', () => {
    expect(getWiderAspectRatio('360x640', '1080x1920')).toEqual('9:16');
  });

  it('getWiderAspectRatio("3440x1440", "2048x858") should return "43:18"', () => {
    expect(getWiderAspectRatio('3440x1440', '2048x858')).toEqual('43:18');
  });

  it('getWiderAspectRatio("12345x61234", "12534x51234") should return "2089:8539"', () => {
    expect(getWiderAspectRatio('12345x61234', '12534x51234')).toEqual(
      '2089:8539',
    );
  });
});
