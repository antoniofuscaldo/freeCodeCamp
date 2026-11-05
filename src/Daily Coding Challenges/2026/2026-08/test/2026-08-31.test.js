import { describe, expect, it } from 'vitest';

import { generateHex } from '../2026-08-31.js';

describe('generateHex', () => {
  it('generateHex("yellow") should return "Invalid color"', () => {
    expect(generateHex('yellow')).toEqual('Invalid color');
  });

  it('generateHex("red") should return a six-character string', () => {
    expect(generateHex('red')).toMatch(/^[0-9A-Fa-f]{6}$/);
  });

  it('generateHex("red") should return a valid six-character hex color code', () => {
    const hex = generateHex('red');
    expect(hex).toMatch(/^[0-9A-Fa-f]{6}$/);
  });

  it('generateHex("red") should return a valid hex color with a higher red value than other colors', () => {
    const hex = generateHex('red');
    expect(hex).toMatch(/^[0-9A-Fa-f]{6}$/);

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    expect(r).toBeGreaterThan(g);
    expect(r).toBeGreaterThan(b);
  });

  it('Calling generateHex("red") twice should return two different hex color values where red is dominant', () => {
    const a = generateHex('red');
    const b = generateHex('red');

    expect(a).toMatch(/^[0-9A-Fa-f]{6}$/);
    expect(b).toMatch(/^[0-9A-Fa-f]{6}$/);
    expect(a).not.toEqual(b);

    const ra = parseInt(a.slice(0, 2), 16);
    const ga = parseInt(a.slice(2, 4), 16);
    const ba = parseInt(a.slice(4, 6), 16);
    expect(ra).toBeGreaterThan(ga);
    expect(ra).toBeGreaterThan(ba);

    const rb = parseInt(b.slice(0, 2), 16);
    const gb = parseInt(b.slice(2, 4), 16);
    const bb = parseInt(b.slice(4, 6), 16);
    expect(rb).toBeGreaterThan(gb);
    expect(rb).toBeGreaterThan(bb);
  });

  it('Calling generateHex("green") twice should return two different hex color values where green is dominant', () => {
    const a = generateHex('green');
    const b = generateHex('green');

    expect(a).toMatch(/^[0-9A-Fa-f]{6}$/);
    expect(b).toMatch(/^[0-9A-Fa-f]{6}$/);
    expect(a).not.toEqual(b);

    const ra = parseInt(a.slice(0, 2), 16);
    const ga = parseInt(a.slice(2, 4), 16);
    const ba = parseInt(a.slice(4, 6), 16);
    expect(ga).toBeGreaterThan(ra);
    expect(ga).toBeGreaterThan(ba);

    const rb = parseInt(b.slice(0, 2), 16);
    const gb = parseInt(b.slice(2, 4), 16);
    const bb = parseInt(b.slice(4, 6), 16);
    expect(gb).toBeGreaterThan(rb);
    expect(gb).toBeGreaterThan(bb);
  });

  it('Calling generateHex("blue") twice should return two different hex color values where blue is dominant', () => {
    const a = generateHex('blue');
    const b = generateHex('blue');

    expect(a).toMatch(/^[0-9A-Fa-f]{6}$/);
    expect(b).toMatch(/^[0-9A-Fa-f]{6}$/);
    expect(a).not.toEqual(b);

    const ra = parseInt(a.slice(0, 2), 16);
    const ga = parseInt(a.slice(2, 4), 16);
    const ba = parseInt(a.slice(4, 6), 16);
    expect(ba).toBeGreaterThan(ra);
    expect(ba).toBeGreaterThan(ga);

    const rb = parseInt(b.slice(0, 2), 16);
    const gb = parseInt(b.slice(2, 4), 16);
    const bb = parseInt(b.slice(4, 6), 16);
    expect(bb).toBeGreaterThan(rb);
    expect(bb).toBeGreaterThan(gb);
  });
});
