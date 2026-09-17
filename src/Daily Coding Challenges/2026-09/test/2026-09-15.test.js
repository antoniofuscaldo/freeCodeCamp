import { describe, expect, it } from 'vitest';

import { adjustThermostat } from '../2026-09-15.js';

describe('adjustThermostat', () => {
  it('adjustThermostat(68, 72) should return "heat"', () => {
    expect(adjustThermostat(68, 72)).toEqual('heat');
  });

  it('adjustThermostat(75, 72) should return "cool"', () => {
    expect(adjustThermostat(75, 72)).toEqual('cool');
  });

  it('adjustThermostat(72, 72) should return "hold"', () => {
    expect(adjustThermostat(72, 72)).toEqual('hold');
  });

  it('adjustThermostat(-20.5, -10.1) should return "heat"', () => {
    expect(adjustThermostat(-20.5, -10.1)).toEqual('heat');
  });

  it('adjustThermostat(100, 99.9) should return "cool"', () => {
    expect(adjustThermostat(100, 99.9)).toEqual('cool');
  });

  it('adjustThermostat(0.0, 0.0) should return "hold"', () => {
    expect(adjustThermostat(0.0, 0.0)).toEqual('hold');
  });
});
