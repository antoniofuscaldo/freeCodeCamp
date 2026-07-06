import { describe, expect, it } from 'vitest';

import { getDeepestBrackets } from '../2026-05-02.js';

describe('getDeepestBrackets', () => {
  it('getDeepestBrackets("(hello (world))") should return "world"', () => {
    expect(getDeepestBrackets('(hello (world))')).toEqual('world');
  });

  it('getDeepestBrackets("[outer [inner] outer]") should return "inner"', () => {
    expect(getDeepestBrackets('[outer [inner] outer]')).toEqual('inner');
  });

  it('getDeepestBrackets("{a{b}c{d{e}f}g}") should return "e"', () => {
    expect(getDeepestBrackets('{a{b}c{d{e}f}g}')).toEqual('e');
  });

  it('getDeepestBrackets("[the {quick (brown [fox] jumped) over (the) lazy} dog]") should return "fox"', () => {
    expect(
      getDeepestBrackets(
        '[the {quick (brown [fox] jumped) over (the) lazy} dog]',
      ),
    ).toEqual('fox');
  });

  it('getDeepestBrackets("f[(r)e{e}C{o[(d){e(C)}a]m}]p") should return "C"', () => {
    expect(getDeepestBrackets('f[(r)e{e}C{o[(d){e(C)}a]m}]p')).toEqual('C');
  });
});
