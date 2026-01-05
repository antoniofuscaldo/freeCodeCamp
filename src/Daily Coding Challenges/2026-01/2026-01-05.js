/**

Tire Pressure

Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.

1 bar equal 14.5038 psi.
Return an array with the following values for each tire:

"Low" if the tire pressure is below the minimum allowed.
"Good" if it's between the minimum and maximum allowed.
"High" if it's above the maximum allowed.

 */

function tireStatus(pressuresPSI, rangeBar) {
  const conversionFactor = 14.5038;

  const minPressurePSI = rangeBar[0] * conversionFactor;
  const maxPressurePSI = rangeBar[1] * conversionFactor;

  let statuses = [];

  for (let i = 0; i < pressuresPSI.length; i++) {
    if (pressuresPSI[i] < minPressurePSI) {
      statuses.push('Low');
    } else if (pressuresPSI[i] > maxPressurePSI) {
      statuses.push('High');
    } else {
      statuses.push('Good');
    }
  }

  return statuses;
}
