/**

Sleep Debt

Given an array of hours slept each night leading up to today, and a target number of hours per night, return how many hours of sleep you need tonight to eliminate your sleep debt.

Include tonight's hours in the total time needed to catch up.
If you've slept enough to cover tonight's target or more, return 0.

Tests:
Waiting:1. sleepDebt([6, 6, 6, 6, 6, 6], 8) should return 20.
Waiting:2. sleepDebt([6, 7, 8, 4, 8, 6], 7) should return 10.
Waiting:3. sleepDebt([10, 10, 9, 10, 9, 11], 9) should return 4.
Waiting:4. sleepDebt([8, 7, 6, 7, 6, 8], 6) should return 0.
Waiting:5. sleepDebt([8, 9, 10, 9, 10, 7], 7) should return 0.

*/

export function sleepDebt(hoursSlept, targetHours) {
  const totalNeeded = targetHours * (hoursSlept.length + 1);
  const totalSlept = hoursSlept.reduce((a, b) => a + b, 0);
  return Math.max(0, totalNeeded - totalSlept);
}
