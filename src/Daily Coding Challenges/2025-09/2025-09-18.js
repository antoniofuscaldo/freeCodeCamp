/**

Fill The Tank

Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.

tankSize is the total capacity of the tank in gallons.
fuelLevel is the current amount of fuel in the tank in gallons.
pricePerGallon is the cost of one gallon of fuel.
The returned value should be rounded to two decimal places in the format: "$d.dd".

*/

function costToFill(tankSize, fuelLevel, pricePerGallon) {
  let gallonsNeeded = tankSize - fuelLevel;
  let cost = gallonsNeeded * pricePerGallon;
  return `$${cost.toFixed(2)}`;
}
