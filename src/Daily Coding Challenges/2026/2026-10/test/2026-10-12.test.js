import { describe, expect, it } from 'vitest';

import { battle } from '../2026-10-12.js';

describe('battle', () => {
  it('battle("hello world", "hello word") should return "We win"', () => {
    expect(battle('hello world', 'hello word')).toEqual('We win');
  });

  it('battle("Hello world", "hello world") should return "We win"', () => {
    expect(battle('Hello world', 'hello world')).toEqual('We win');
  });

  it('battle("lorem ipsum", "kitty ipsum") should return "We lose"', () => {
    expect(battle('lorem ipsum', 'kitty ipsum')).toEqual('We lose');
  });

  it('battle("hello world", "world hello") should return "Draw"', () => {
    expect(battle('hello world', 'world hello')).toEqual('Draw');
  });

  it('battle("git checkout", "git switch") should return "We win"', () => {
    expect(battle('git checkout', 'git switch')).toEqual('We win');
  });

  it('battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose"', () => {
    expect(
      battle('Cheeseburger with fries', 'Cheeseburger with Fries'),
    ).toEqual('We lose');
  });

  it('battle("We must never surrender", "Our team must win") should return "Draw"', () => {
    expect(battle('We must never surrender', 'Our team must win')).toEqual(
      'Draw',
    );
  });
});
