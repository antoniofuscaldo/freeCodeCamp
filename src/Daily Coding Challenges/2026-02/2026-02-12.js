/**

2026 Winter Games Day 7: Speed Skating

Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the difference in lap times is the largest.

The first element of each array corresponds to lap 1, the second to lap 2, and so on.

*/

function largestDifference(skater1, skater2) {
  let max = -1;
  let lap = 1;

  for (let i = 0; i < skater1.length; i++) {
    const diff = Math.abs(skater1[i] - skater2[i]);
    if (diff > max) {
      max = diff;
      lap = i + 1;
    }
  }

  return lap;
}
