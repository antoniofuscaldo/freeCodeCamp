import { describe, expect, it } from 'vitest';

import { format } from '../2026-10-26.js';

describe('format', () => {
  it('format(500) should return "8:20"', () => {
    expect(format(500)).toEqual('8:20');
  });

  it('format(4000) should return "1:06:40"', () => {
    expect(format(4000)).toEqual('1:06:40');
  });

  it('format(1) should return "0:01"', () => {
    expect(format(1)).toEqual('0:01');
  });

  it('format(5555) should return "1:32:35"', () => {
    expect(format(5555)).toEqual('1:32:35');
  });

  it('format(99999) should return "27:46:39"', () => {
    expect(format(99999)).toEqual('27:46:39');
  });
});
