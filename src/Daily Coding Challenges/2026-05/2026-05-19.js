/**

Sleep Debt

Given an array of hours slept each night leading up to today, and a target number of hours per night, return how many hours of sleep you need tonight to eliminate your sleep debt.

Include tonight's hours in the total time needed to catch up.
If you've slept enough to cover tonight's target or more, return 0.

*/

function sleepDebt(hoursSlept, targetHours) {
  const totalNeeded = targetHours * (hoursSlept.length + 1);
  const totalSlept = hoursSlept.reduce((a, b) => a + b, 0);
  return Math.max(0, totalNeeded - totalSlept);
}
