/**

Thermostat Adjuster

Given the current temperature of a room and a target temperature, return a string indicating how to adjust the room temperature based on these constraints:

Return "heat" if the current temperature is below the target.
Return "cool" if the current temperature is above the target.
Return "hold" if the current temperature is equal to the target.

Tests:
Waiting:1. adjustThermostat(68, 72) should return "heat".
Waiting:2. adjustThermostat(75, 72) should return "cool".
Waiting:3. adjustThermostat(72, 72) should return "hold".
Waiting:4. adjustThermostat(-20.5, -10.1) should return "heat".
Waiting:5. adjustThermostat(100, 99.9) should return "cool".
Waiting:6. adjustThermostat(0.0, 0.0) should return "hold".

*/

export function adjustThermostat(temp, target) {
  if (temp < target) return 'heat';
  if (temp > target) return 'cool';
  return 'hold';
}
