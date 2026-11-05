/**

Space Week Day 7: Launch Fuel

For the final day of Space Week, you will be given the mass in kilograms (kg) of a payload you want to send to orbit. Determine the amount of fuel needed to send your payload to orbit using the following rules:

Rockets require 1 kg of fuel per 5 kg of mass they must lift.
Fuel itself has mass. So when you add fuel, the mass to lift goes up, which requires more fuel, which increases the mass, and so on.
To calculate the total fuel needed: start with the payload mass, calculate the fuel needed for that, add that fuel to the total mass, and calculate again. Repeat this process until the additional fuel required is less than 1 kg, then stop.
Ignore the mass of the rocket itself. Only compute fuel needed to lift the payload and its own fuel.
For example, given a payload mass of 50 kg, you would need 10 kg of fuel to lift it (payload / 5), which increases the total mass to 60 kg, which needs 12 kg to lift (2 additional kg), which increases the total mass to 62 kg, which needs 12.4 kg to lift - 0.4 additional kg - which is less 1 additional kg, so we stop here. The total mass to lift is 62.4 kg, 50 of which is the initial payload and 12.4 of fuel.

Return the amount of fuel needed rounded to one decimal place.

Tests:
Waiting:1. launchFuel(50) should return 12.4.
Waiting:2. launchFuel(500) should return 124.8.
Waiting:3. launchFuel(243) should return 60.7.
Waiting:4. launchFuel(11000) should return 2749.8.
Waiting:5. launchFuel(6214) should return 1553.4.

*/

export function launchFuel(payload) {
  let mass = payload;
  let fuel = 0;
  while (true) {
    const required = mass / 5;
    const extra = required - fuel;
    fuel = required;
    if (extra < 1) break;
    mass = payload + fuel;
  }
  return Math.round(fuel * 10) / 10;
}
