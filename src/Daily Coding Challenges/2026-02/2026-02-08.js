/**

2026 Winter Games Day 3: Biathlon

Given an array of integers, where each value represents the number of targets hit in a single round of a biathlon, return the total penalty distance the athlete must ski.

Each round consists of 5 targets.
Each missed target results in a 150 meter penalty loop.

*/

function calculatePenaltyDistance(rounds) {
  let misses = 0;
  for (const r of rounds) misses += 5 - r;
  return misses * 150;
}
