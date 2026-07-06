import { describe, expect, it } from 'vitest';

import { duplicateCharacterCount } from '../2026-06-30.js';

describe('duplicateCharacterCount', () => {
  it('duplicateCharacterCount("aloha", "hei") should return 1', () => {
    expect(duplicateCharacterCount('aloha', 'hei')).toEqual(1);
  });

  it('duplicateCharacterCount("jambo", "bonjour") should return 4', () => {
    expect(duplicateCharacterCount('jambo', 'bonjour')).toEqual(4);
  });

  it('duplicateCharacterCount("hello", "hola") should return 3', () => {
    expect(duplicateCharacterCount('hello', 'hola')).toEqual(3);
  });

  it('duplicateCharacterCount("ola", "hej") should return 0', () => {
    expect(duplicateCharacterCount('ola', 'hej')).toEqual(0);
  });

  it('duplicateCharacterCount("ciao", "konnichiwa") should return 5', () => {
    expect(duplicateCharacterCount('ciao', 'konnichiwa')).toEqual(5);
  });

  it('duplicateCharacterCount("merhaba", "xin chao") should return 2', () => {
    expect(duplicateCharacterCount('merhaba', 'xin chao')).toEqual(2);
  });

  it('duplicateCharacterCount("hello world", "hello to everyone around the world") should return 26', () => {
    expect(
      duplicateCharacterCount(
        'hello world',
        'hello to everyone around the world',
      ),
    ).toEqual(26);
  });
});
