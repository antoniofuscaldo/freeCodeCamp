import { describe, expect, it } from 'vitest';

import { rgbToHex } from '../2026-09-02.js';

describe('rgbToHex', () => {
  it('rgbToHex("rgb(255, 255, 255)") should return "#ffffff"', () => {
    expect(rgbToHex('rgb(255, 255, 255)')).toEqual('#ffffff');
  });

  it('rgbToHex("rgb(1, 11, 111)") should return "#010b6f"', () => {
    expect(rgbToHex('rgb(1, 11, 111)')).toEqual('#010b6f');
  });

  it('rgbToHex("rgb(173, 216, 230)") should return "#add8e6"', () => {
    expect(rgbToHex('rgb(173, 216, 230)')).toEqual('#add8e6');
  });

  it('rgbToHex("rgb(79, 123, 201)") should return "#4f7bc9"', () => {
    expect(rgbToHex('rgb(79, 123, 201)')).toEqual('#4f7bc9');
  });
});
