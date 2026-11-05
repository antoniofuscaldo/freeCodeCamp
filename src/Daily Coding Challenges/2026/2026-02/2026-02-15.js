/**

2026 Winter Games Day 10: Alpine Skiing

Given a ski hill's vertical drop, horizontal distance, and type, determine the difficulty rating of the hill.

To determine the rating:

Calculate the steepness of the hill by taking the drop divided by the distance.
Then, calculate the adjusted steepness based on the hill type:
"Downhill" multiply steepness by 1.2
"Slalom": multiply steepness by 0.9
"Giant Slalom": multiply steepness by 1.0
Return:

"Green" if the adjusted steepness is less than or equal to 0.1
"Blue" if the adjusted steepness is greater than 0.1 and less than or equal to 0.25
"Black" if the adjusted steepness is greater than 0.25

*/

function getHillRating(drop, distance, type) {
  let steep = drop / distance;

  if (type === 'Downhill') steep *= 1.2;
  else if (type === 'Slalom') steep *= 0.9;

  if (steep <= 0.1) return 'Green';
  if (steep <= 0.25) return 'Blue';
  return 'Black';
}
