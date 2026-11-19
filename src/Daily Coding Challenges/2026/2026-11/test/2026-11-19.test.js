import { describe, expect, it } from 'vitest';

import { convert } from '../2026-11-19.js';

describe('convert', () => {
  it('convert("# My level 1 heading") should return "<h1>My level 1 heading</h1>"', () => {
    expect(convert('# My level 1 heading')).toEqual(
      '<h1>My level 1 heading</h1>',
    );
  });

  it('convert("My heading") should return "Invalid format"', () => {
    expect(convert('My heading')).toEqual('Invalid format');
  });

  it('convert("##### My level 5 heading") should return "<h5>My level 5 heading</h5>"', () => {
    expect(convert('##### My level 5 heading')).toEqual(
      '<h5>My level 5 heading</h5>',
    );
  });

  it('convert("#My heading") should return "Invalid format"', () => {
    expect(convert('#My heading')).toEqual('Invalid format');
  });

  it('convert("  ###  My level 3 heading") should return "<h3>My level 3 heading</h3>"', () => {
    expect(convert('  ###  My level 3 heading')).toEqual(
      '<h3>My level 3 heading</h3>',
    );
  });

  it('convert("####### My level 7 heading") should return "Invalid format"', () => {
    expect(convert('####### My level 7 heading')).toEqual('Invalid format');
  });

  it('convert("## My #2 heading") should return "<h2>My #2 heading</h2>"', () => {
    expect(convert('## My #2 heading')).toEqual('<h2>My #2 heading</h2>');
  });
});
