/**

2026 Winter Games Day 12: Bobsled

Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.

The length of the array determines the team size: 1, 2 or 4 person teams.
All given weight values are in kilograms (kg).
The bobsled (sled by iteself) must have a minimum weight of:

162 kg for a 1-person team
170 kg for a 2-person team
210 kg for a 4-person team
The total weight of the bobsled (athletes plus sled) must not exceed:

247 kg for a 1-person team
390 kg for a 2-person team
630 kg for a 4-person team
Return "Eligible" if the team meets all the requirements, or "Not Eligible" if the team fails to meet one or more of the requirements.

*/

function checkEligibility(athleteWeights, sledWeight) {
  const team = athleteWeights.length;

  const min = team === 1 ? 162 : team === 2 ? 170 : 210;
  const max = team === 1 ? 247 : team === 2 ? 390 : 630;

  if (sledWeight < min) return 'Not Eligible';

  const total = sledWeight + athleteWeights.reduce((a, b) => a + b, 0);
  return total <= max ? 'Eligible' : 'Not Eligible';
}
