import { describe, expect, it } from 'vitest';

import { to12 } from '../2026-10-13.js';

describe('to12', () => {
  it('to12("1124") should return "11:24 AM"', () => {
    expect(to12('1124')).toEqual('11:24 AM');
  });

  it('to12("0900") should return "9:00 AM"', () => {
    expect(to12('0900')).toEqual('9:00 AM');
  });

  it('to12("1455") should return "2:55 PM"', () => {
    expect(to12('1455')).toEqual('2:55 PM');
  });

  it('to12("2346") should return "11:46 PM"', () => {
    expect(to12('2346')).toEqual('11:46 PM');
  });

  it('to12("0030") should return "12:30 AM"', () => {
    expect(to12('0030')).toEqual('12:30 AM');
  });
});
