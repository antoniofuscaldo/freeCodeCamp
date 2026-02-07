/**

2026 Winter Games Day 2: Snowboarding

Given a snowboarder's starting stance and a rotation in degrees, determine their landing stance.

A snowboarder's stance is either "Regular" or "Goofy".
Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
The landing stance flips every 180 degrees of rotation.
For example, given "Regular" and 90, return "Regular". Given "Regular" and 180 degrees, return "Goofy".

*/

function getLandingStance(startStance, rotation) {
  return Math.floor(Math.abs(rotation) / 180) % 2 === 0
    ? startStance
    : startStance === 'Regular'
      ? 'Goofy'
      : 'Regular';
}
