import { describe, expect, it } from 'vitest';

import { piggyBank } from '../2026-07-22.js';

describe('piggyBank', () => {
  it('piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 }) should return "$1.98"', () => {
    expect(
      piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 }),
    ).toEqual('$1.98');
  });

  it('piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 1 }) should return "$0.41"', () => {
    expect(
      piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 1 }),
    ).toEqual('$0.41');
  });

  it('piggyBank({ nickels: 8, dimes: 6, quarters: 5 }) should return "$2.25"', () => {
    expect(piggyBank({ nickels: 8, dimes: 6, quarters: 5 })).toEqual('$2.25');
  });

  it('piggyBank({}) should return "$0.00"', () => {
    expect(piggyBank({})).toEqual('$0.00');
  });

  it('piggyBank({ pennies: 146, nickels: 11, dimes: 0, quarters: 19 }) should return "$6.76"', () => {
    expect(
      piggyBank({ pennies: 146, nickels: 11, dimes: 0, quarters: 19 }),
    ).toEqual('$6.76');
  });
});
