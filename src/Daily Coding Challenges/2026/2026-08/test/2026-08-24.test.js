import { describe, expect, it } from 'vitest';

import { battle } from '../2026-08-24.js';

describe('battle', () => {
  it('battle("Hello", "World") should return "We lost"', () => {
    expect(battle('Hello', 'World')).toEqual('We lost');
  });

  it('battle("pizza", "salad") should return "We won"', () => {
    expect(battle('pizza', 'salad')).toEqual('We won');
  });

  it('battle("C@T5", "D0G$") should return "We won"', () => {
    expect(battle('C@T5', 'D0G$')).toEqual('We won');
  });

  it('battle("kn!ght", "orc") should return "Opponent retreated"', () => {
    expect(battle('kn!ght', 'orc')).toEqual('Opponent retreated');
  });

  it('battle("PC", "Mac") should return "We retreated"', () => {
    expect(battle('PC', 'Mac')).toEqual('We retreated');
  });

  it('battle("Wizards", "Dragons") should return "It was a tie"', () => {
    expect(battle('Wizards', 'Dragons')).toEqual('It was a tie');
  });

  it('battle("Mr. Smith", "Dr. Jones") should return "It was a tie"', () => {
    expect(battle('Mr. Smith', 'Dr. Jones')).toEqual('It was a tie');
  });
});
