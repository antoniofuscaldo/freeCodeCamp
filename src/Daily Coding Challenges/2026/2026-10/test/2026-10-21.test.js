import { describe, expect, it } from 'vitest';

import { adjustThermostat } from '../2026-10-21.js';

describe('adjustThermostat', () => {
  it('adjustThermostat(32, 0) should return "Hold"', () => {
    expect(adjustThermostat(32, 0)).toEqual('Hold');
  });

  it('adjustThermostat(70, 25) should return "Heat: 7.0 degrees Fahrenheit"', () => {
    expect(adjustThermostat(70, 25)).toEqual('Heat: 7.0 degrees Fahrenheit');
  });

  it('adjustThermostat(72, 18) should return "Cool: 7.6 degrees Fahrenheit"', () => {
    expect(adjustThermostat(72, 18)).toEqual('Cool: 7.6 degrees Fahrenheit');
  });

  it('adjustThermostat(212, 100) should return "Hold"', () => {
    expect(adjustThermostat(212, 100)).toEqual('Hold');
  });

  it('adjustThermostat(59, 22) should return "Heat: 12.6 degrees Fahrenheit"', () => {
    expect(adjustThermostat(59, 22)).toEqual('Heat: 12.6 degrees Fahrenheit');
  });
});
