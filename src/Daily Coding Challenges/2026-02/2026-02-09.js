/**

2026 Winter Games Day 4: Ski Jumping

Given distance points, style points, a wind compensation value, and K-point bonus value, calculate your score for the ski jump and determine if you won a medal or not.

Your score is calculated by summing the above four values.
The current total scores of the other jumpers are:

165.5
172.0
158.0
180.0
169.5
175.0
162.0
170.0
If your score is the best, return "Gold"
If it's second best, return "Silver"
If it's third best, return "Bronze"
Otherwise, return "No Medal"

*/

function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
  const score = distancePoints + stylePoints + windComp + kPointBonus;
  const others = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0];

  let rank = 1;
  for (const s of others) if (s > score) rank++;

  if (rank === 1) return 'Gold';
  if (rank === 2) return 'Silver';
  if (rank === 3) return 'Bronze';
  return 'No Medal';
}
