/**

Mile Pace

Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed.

*/

function milePace(miles, duration) {
  let [minutes, seconds] = duration.split(":").map(Number);
  let totalSeconds = minutes * 60 + seconds;
  let paceSeconds = Math.floor(totalSeconds / miles);
  let paceMinutes = Math.floor(paceSeconds / 60);
  let paceRemainingSeconds = paceSeconds % 60;
  let mm = String(paceMinutes).padStart(2, "0");
  let ss = String(paceRemainingSeconds).padStart(2, "0");
  return `${mm}:${ss}`;
}
