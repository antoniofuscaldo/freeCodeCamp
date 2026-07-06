import { describe, expect, it } from 'vitest';

import { getRentalCost } from '../2026-06-19.js';

describe('getRentalCost', () => {
  it('getRentalCost("2026-06-18T18:30:00Z", "2026-06-19T10:30:00Z", 1) should return "$4.99"', () => {
    expect(
      getRentalCost('2026-06-18T18:30:00Z', '2026-06-19T10:30:00Z', 1),
    ).toEqual('$4.99');
  });

  it('getRentalCost("2026-06-18T14:30:00Z", "2026-06-20T12:30:00Z", 1) should return "$12.97"', () => {
    expect(
      getRentalCost('2026-06-18T14:30:00Z', '2026-06-20T12:30:00Z', 1),
    ).toEqual('$12.97');
  });

  it('getRentalCost("2026-06-18T10:15:00Z", "2026-06-18T19:45:00Z", 3) should return "$3.99"', () => {
    expect(
      getRentalCost('2026-06-18T10:15:00Z', '2026-06-18T19:45:00Z', 3),
    ).toEqual('$3.99');
  });

  it('getRentalCost("2026-06-18T15:20:00Z", "2026-06-23T08:10:00Z", 3) should return "$9.97"', () => {
    expect(
      getRentalCost('2026-06-18T15:20:00Z', '2026-06-23T08:10:00Z', 3),
    ).toEqual('$9.97');
  });

  it('getRentalCost("2026-06-18T12:00:00Z", "2026-06-25T12:00:00Z", 7) should return "$2.99"', () => {
    expect(
      getRentalCost('2026-06-18T12:00:00Z', '2026-06-25T12:00:00Z', 7),
    ).toEqual('$2.99');
  });

  it('getRentalCost("2026-06-18T08:00:00Z", "2027-06-18T14:00:00Z", 7) should return "$358.40"', () => {
    expect(
      getRentalCost('2026-06-18T08:00:00Z', '2027-06-18T14:00:00Z', 7),
    ).toEqual('$358.40');
  });
});
