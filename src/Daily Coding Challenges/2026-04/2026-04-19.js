/**

Unique Stair Climber

Given a number of stairs, return how many distinct ways someone can climb them taking either 1 or 2 steps at a time.

 */

function getUniqueClimbs(steps) {
  if (steps <= 1) return 1;
  let a = 1,
    b = 1;
  for (let i = 2; i <= steps; i++) {
    const t = a + b;
    a = b;
    b = t;
  }
  return b;
}
