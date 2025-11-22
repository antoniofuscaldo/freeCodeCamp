/**

Mile Pace

Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed.

*/

function milePace(miles, duration) {
  const [minutes, seconds] = duration.split(':').map(Number),
    totalSeconds = minutes * 60 + seconds,
    paceSeconds = Math.floor(totalSeconds / miles),
    paceMinutes = Math.floor(paceSeconds / 60),
    paceRemainingSeconds = paceSeconds % 60,
    mm = String(paceMinutes).padStart(2, '0'),
    ss = String(paceRemainingSeconds).padStart(2, '0');
  return `${mm}:${ss}`;
}
