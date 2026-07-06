import { describe, expect, it } from 'vitest';

import { getPizzasToOrder } from '../2026-05-27.js';

describe('getPizzasToOrder', () => {
  it("getPizzasToOrder([8, 8, 8]) should return 2", () => {
    expect(getPizzasToOrder([8, 8, 8])).toEqual(2);
  });

  it("getPizzasToOrder([10, 9, 8, 2, 2, 6, 10]) should return 3", () => {
    expect(getPizzasToOrder([10, 9, 8, 2, 2, 6, 10])).toEqual(3);
  });

  it("getPizzasToOrder([1, 2, 3, 4, 5]) should return 2", () => {
    expect(getPizzasToOrder([1, 2, 3, 4, 5])).toEqual(2);
  });

  it("getPizzasToOrder([8, 8, 8, 8, 8, 8, 8, 8]) should return 3", () => {
    expect(getPizzasToOrder([8, 8, 8, 8, 8, 8, 8, 8])).toEqual(3);
  });

  it("getPizzasToOrder([9, 9, 6]) should return 1", () => {
    expect(getPizzasToOrder([9, 9, 6])).toEqual(1);
  });

  it("getPizzasToOrder([10, 12, 16, 9, 8, 11, 15, 8, 0]) should return 5", () => {
    expect(getPizzasToOrder([10, 12, 16, 9, 8, 11, 15, 8, 0])).toEqual(5);
  });
});
