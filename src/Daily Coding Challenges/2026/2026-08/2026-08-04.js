/**

Golf Handicap Calculator

Given an array of golf scores and a corresponding array of course par values, return the golfer's handicap index using the following method:

Calculate the differential for each round by subtracting the par from the score, then return the average of all differentials rounded to one decimal place.

Tests:
Waiting:1. calculateHandicap([72, 72, 72], [72, 72, 72]) should return 0.
Waiting:2. calculateHandicap([80, 76, 78, 78], [72, 72, 72, 72]) should return 6.
Waiting:3. calculateHandicap([42, 45, 46, 44], [36, 36, 36, 36]) should return 8.3.
Waiting:4. calculateHandicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71]) should return 8.8.
Waiting:5. calculateHandicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]) should return 11.7.

*/

export function calculateHandicap(scores, pars) {
  const n = scores.length;
  if (n === 0) return 0;

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += scores[i] - pars[i];
  }

  const avg = sum / n;
  const rounded = Math.round(avg * 10) / 10;

  return Number.isInteger(rounded) ? rounded : rounded;
}
