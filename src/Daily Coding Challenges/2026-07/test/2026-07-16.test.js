import { describe, expect, it } from 'vitest';

import { pigLatin } from '../2026-07-16.js';

describe('pigLatin', () => {
  it('pigLatin("universe") should return "universeway"', () => {
    expect(pigLatin('universe')).toEqual('universeway');
  });

  it('pigLatin("hello") should return "ellohay"', () => {
    expect(pigLatin('hello')).toEqual('ellohay');
  });

  it('pigLatin("hello universe") should return "ellohay universeway"', () => {
    expect(pigLatin('hello universe')).toEqual('ellohay universeway');
  });

  it('pigLatin("Hello universe") should return "Ellohay universeway"', () => {
    expect(pigLatin('Hello universe')).toEqual('Ellohay universeway');
  });

  it('pigLatin("Pig Latin is fun") should return "Igpay Atinlay isway unfay"', () => {
    expect(pigLatin('Pig Latin is fun')).toEqual('Igpay Atinlay isway unfay');
  });

  it('pigLatin("The quick brown fox jumped over the lazy dog") should return "Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday"', () => {
    expect(pigLatin('The quick brown fox jumped over the lazy dog')).toEqual(
      'Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday',
    );
  });
});
