import { describe, expect, it } from 'vitest';

import { getMood } from '../2026-06-29.js';

describe('getMood', () => {
  it('getMood("rock", 111) should return "happy"', () => {
    expect(getMood('rock', 111)).toEqual('happy');
  });

  it('getMood("electronic", 74) should return "focus"', () => {
    expect(getMood('electronic', 74)).toEqual('focus');
  });

  it('getMood("classical", 180) should return "happy"', () => {
    expect(getMood('classical', 180)).toEqual('happy');
  });

  it('getMood("rock", 155) should return "hype"', () => {
    expect(getMood('rock', 155)).toEqual('hype');
  });

  it('getMood("electronic", 90) should return "happy"', () => {
    expect(getMood('electronic', 90)).toEqual('happy');
  });

  it('getMood("classical", 67) should return "focus"', () => {
    expect(getMood('classical', 67)).toEqual('focus');
  });

  it('getMood("pop", 100) should return "happy"', () => {
    expect(getMood('pop', 100)).toEqual('happy');
  });

  it('getMood("electronic", 135) should return "hype"', () => {
    expect(getMood('electronic', 135)).toEqual('hype');
  });
});
