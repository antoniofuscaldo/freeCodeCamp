/**

2026 Winter Games Day 6: Figure Skating

Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.

The first argument is an array of 10 judge scores, each a number from 0 to 10. Remove the highest and lowest judge scores and sum the remaining 8 scores to get the base score.

Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the final score.

*/

function computeScore(judgeScores, ...penalties) {
  judgeScores.sort((a, b) => a - b);
  const base = judgeScores.slice(1, 9).reduce((a, b) => a + b, 0);
  return base - penalties.reduce((a, b) => a + b, 0);
}
