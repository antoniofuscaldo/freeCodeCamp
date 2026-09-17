import { describe, expect, it } from 'vitest';

import { generateSlug } from '../2026-09-17.js';

describe('generateSlug', () => {
  it('generateSlug("helloWorld") should return "helloworld"', () => {
    expect(generateSlug('helloWorld')).toEqual('helloworld');
  });

  it('generateSlug("hello world!") should return "hello%20world"', () => {
    expect(generateSlug('hello world!')).toEqual('hello%20world');
  });

  it('generateSlug(" hello-world ") should return "helloworld"', () => {
    expect(generateSlug(' hello-world ')).toEqual('helloworld');
  });

  it('generateSlug("hello  world") should return "hello%20world"', () => {
    expect(generateSlug('hello  world')).toEqual('hello%20world');
  });

  it('generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ") should return "h3110%20w0r1d"', () => {
    expect(generateSlug('  ?H^3-1*1]0! W[0%R#1]D  ')).toEqual('h3110%20w0r1d');
  });
});
