import { describe, expect, it } from 'vitest';

import { formatCoffeeOrder } from '../2026-05-15.js';

describe('formatCoffeeOrder', () => {
  it('formatCoffeeOrder("I\'d like an oat latte with vanilla syrup and an extra shot please.") should return "oat latte + vanilla syrup + extra shot: $6.25"', () => {
    expect(
      formatCoffeeOrder(
        "I'd like an oat latte with vanilla syrup and an extra shot please.",
      ),
    ).toEqual('oat latte + vanilla syrup + extra shot: $6.25');
  });

  it('formatCoffeeOrder("Give me a cappuccino with caramel drizzle, vanilla syrup, and some oat milk.") should return "cappuccino + vanilla syrup + caramel drizzle + oat milk: $6.85"', () => {
    expect(
      formatCoffeeOrder(
        'Give me a cappuccino with caramel drizzle, vanilla syrup, and some oat milk.',
      ),
    ).toEqual('cappuccino + vanilla syrup + caramel drizzle + oat milk: $6.85');
  });

  it('formatCoffeeOrder("Can I get a cold brew with some cream and an extra shot.") should return "cold brew + extra shot + cream: $5.75"', () => {
    expect(
      formatCoffeeOrder(
        'Can I get a cold brew with some cream and an extra shot.',
      ),
    ).toEqual('cold brew + extra shot + cream: $5.75');
  });

  it('formatCoffeeOrder("Just an espresso please.") should return "espresso: $3.00"', () => {
    expect(formatCoffeeOrder('Just an espresso please.')).toEqual(
      'espresso: $3.00',
    );
  });

  it('formatCoffeeOrder("I\'ll take an oat latte with cream and an extra shot, and some vanilla syrup and caramel drizzle.") should return "oat latte + vanilla syrup + caramel drizzle + extra shot + cream: $7.60"', () => {
    expect(
      formatCoffeeOrder(
        "I'll take an oat latte with cream and an extra shot, and some vanilla syrup and caramel drizzle.",
      ),
    ).toEqual(
      'oat latte + vanilla syrup + caramel drizzle + extra shot + cream: $7.60',
    );
  });
});
