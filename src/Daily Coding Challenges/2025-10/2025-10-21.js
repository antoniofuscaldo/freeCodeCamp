/**

Thermostat Adjuster 2

Given the current temperature of a room in Fahrenheit and a target temperature in Celsius, return a string indicating how to adjust the room temperature based on these constraints:

Return "Heat: X degrees Fahrenheit" if the current temperature is below the target. With X being the number of degrees in Fahrenheit to heat the room to reach the target, rounded to 1 decimal place.
Return "Cool: X degrees Fahrenheit" if the current temperature is above the target. With X being the number of degrees in Fahrenheit to cool the room to reach the target, rounded to 1 decimal place.
Return "Hold" if the current temperature is equal to the target.
To convert Celsius to Fahrenheit, multiply the Celsius temperature by 1.8 and add 32 to the result (F = (C * 1.8) + 32).

*/

function adjustThermostat(currentF, targetC) {
  let targetF = targetC * 1.8 + 32;

  if (currentF < targetF) {
    let diff = (targetF - currentF).toFixed(1);
    return `Heat: ${diff} degrees Fahrenheit`;
  } else if (currentF > targetF) {
    let diff = (currentF - targetF).toFixed(1);
    return `Cool: ${diff} degrees Fahrenheit`;
  } else {
    return "Hold";
  }
}
