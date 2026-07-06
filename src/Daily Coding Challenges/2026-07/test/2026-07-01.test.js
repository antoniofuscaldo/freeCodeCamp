import { describe, expect, it } from 'vitest';

import { getLuckyNumber } from '../2026-07-01.js';

describe('getLuckyNumber', () => {
  it('getLuckyNumber("John Doe") should return 21', () => {
    expect(getLuckyNumber('John Doe')).toBe(21);
  });

  it('getLuckyNumber("Olivia Lewis") should return 52', () => {
    expect(getLuckyNumber('Olivia Lewis')).toBe(52);
  });

  it('getLuckyNumber("James Wilson") should return 18', () => {
    expect(getLuckyNumber('James Wilson')).toBe(18);
  });

  it('getLuckyNumber("Elizabeth Hernandez") should return 81', () => {
    expect(getLuckyNumber('Elizabeth Hernandez')).toBe(81);
  });

  it('getLuckyNumber("Mike Walker") should return 32', () => {
    expect(getLuckyNumber('Mike Walker')).toBe(32);
  });

  it('getLuckyNumber("Chloe Perez") should return 13', () => {
    expect(getLuckyNumber('Chloe Perez')).toBe(13);
  });
});
