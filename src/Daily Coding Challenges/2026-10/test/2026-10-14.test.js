import { describe, expect, it } from 'vitest';

import { count } from '../2026-10-14.js';

describe('count', () => {
  it("count('abcdefg', 'def') should return 1", () => {
    expect(count('abcdefg', 'def')).toEqual(1);
  });

  it("count('hello', 'world') should return 0", () => {
    expect(count('hello', 'world')).toEqual(0);
  });

  it("count('mississippi', 'iss') should return 2", () => {
    expect(count('mississippi', 'iss')).toEqual(2);
  });

  it("count('she sells seashells by the seashore', 'sh') should return 3", () => {
    expect(count('she sells seashells by the seashore', 'sh')).toEqual(3);
  });

  it("count('101010101010101010101', '101') should return 10", () => {
    expect(count('101010101010101010101', '101')).toEqual(10);
  });
});
