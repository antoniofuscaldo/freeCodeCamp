/**

Mile Pace

Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed.

Tests:
Waiting:1. milePace(3, "24:00") should return "08:00".
Waiting:2. milePace(1, "06:45") should return "06:45".
Waiting:3. milePace(2, "07:00") should return "03:30".
Waiting:4. milePace(26.2, "120:35") should return "04:36".

*/

export function milePace(miles, duration) {
  const [mm, ss] = duration.split(':').map(Number);
  const totalSeconds = mm * 60 + ss;

  const pace = totalSeconds / miles;

  const paceMinutes = Math.floor(pace / 60);
  const paceSeconds = Math.round(pace % 60);

  const mmStr = String(paceMinutes).padStart(2, '0');
  const ssStr = String(paceSeconds).padStart(2, '0');

  return mmStr + ':' + ssStr;
}
