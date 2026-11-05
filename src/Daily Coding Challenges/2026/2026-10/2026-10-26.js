/**

Duration Formatter

Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following rules:

Seconds: Should always be two digits.
Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
Hours: Should be included only if they're greater than zero.

Tests:
Waiting:1. format(500) should return "8:20".
Waiting:2. format(4000) should return "1:06:40".
Waiting:3. format(1) should return "0:01".
Waiting:4. format(5555) should return "1:32:35".
Waiting:5. format(99999) should return "27:46:39".

*/

export function format(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const ss = String(s).padStart(2, '0');

  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
}
