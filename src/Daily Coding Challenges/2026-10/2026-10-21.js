/**

Thermostat Adjuster 2

Given the current temperature of a room in Fahrenheit and a target temperature in Celsius, return a string indicating how to adjust the room temperature based on these constraints:

Return "Heat: X degrees Fahrenheit" if the current temperature is below the target. With X being the number of degrees in Fahrenheit to heat the room to reach the target, rounded to 1 decimal place.
Return "Cool: X degrees Fahrenheit" if the current temperature is above the target. With X being the number of degrees in Fahrenheit to cool the room to reach the target, rounded to 1 decimal place.
Return "Hold" if the current temperature is equal to the target.
To convert Celsius to Fahrenheit, multiply the Celsius temperature by 1.8 and add 32 to the result (F = (C * 1.8) + 32).

Tests:
Waiting:1. adjustThermostat(32, 0) should return "Hold".
Waiting:2. adjustThermostat(70, 25) should return "Heat: 7.0 degrees Fahrenheit".
Waiting:3. adjustThermostat(72, 18) should return "Cool: 7.6 degrees Fahrenheit".
Waiting:4. adjustThermostat(212, 100) should return "Hold".
Waiting:5. adjustThermostat(59, 22) should return "Heat: 12.6 degrees Fahrenheit".

*/

function adjustThermostat(currentF, targetC) {
  const targetF = targetC * 1.8 + 32;
  const diff = targetF - currentF;

  if (Math.abs(diff) < 1e-9) return 'Hold';
  if (diff > 0) return `Heat: ${diff.toFixed(1)} degrees Fahrenheit`;
  return `Cool: ${Math.abs(diff).toFixed(1)} degrees Fahrenheit`;
}
