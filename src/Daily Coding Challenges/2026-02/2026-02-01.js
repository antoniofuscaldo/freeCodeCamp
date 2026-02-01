/**

Digital Detox

Given an array of your login logs, determine whether you have met your digital detox goal.

Each log is a string in the format "YYYY-MM-DD HH:mm:ss".

You have met your digital detox goal if both of the following statements are true:

You logged in no more than once within any four-hour period.
You logged in no more than 2 times on any single day.

*/

function digitalDetox(logs) {
  const ts = logs.map((l) => new Date(l).getTime()).sort((a, b) => a - b);

  for (let i = 1; i < ts.length; i++) {
    if (ts[i] - ts[i - 1] < 4 * 60 * 60 * 1000) return false;
  }

  const days = {};
  for (const l of logs) {
    const d = l.split(' ')[0];
    days[d] = (days[d] || 0) + 1;
    if (days[d] > 2) return false;
  }

  return true;
}
