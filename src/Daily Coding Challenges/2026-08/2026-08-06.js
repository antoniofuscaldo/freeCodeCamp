/**

Spoken Time

Given the angles for the hour and minute hands of an analog clock in degrees (clockwise from 12), return the time in spoken English.

Convert the minute hand angle to minutes (360° = 60 minutes), then use the following rules:

Minutes	Spoken
0	"Y o'clock"
15	"quarter past Y"
1–29 (excluding 15)	"X minutes past Y"
30	"half past Y"
45	"quarter to Z"
31–59 (excluding 45)	"X minutes to Z" (where X is 60 - minutes)
Where Y is the current hour and Z is the next hour, both derived from the hour hand angle (360° = 12 hours).

Note: Hand angles may not land exactly on a number, consider rounding them somehow.

Tests:
Waiting:1. getSpokenTime(90, 0) should return "3 o'clock".
Waiting:2. getSpokenTime(160, 120) should return "20 minutes past 5".
Waiting:3. getSpokenTime(255, 180) should return "half past 8".
Waiting:4. getSpokenTime(67.5, 92) should return "quarter past 2".
Waiting:5. getSpokenTime(200, 240) should return "20 minutes to 7".
Waiting:6. getSpokenTime(322.5, 273) should return "quarter to 11".
Waiting:7. getSpokenTime(117.5, 335) should return "5 minutes to 4".

*/

export function getSpokenTime(hourAngle, minuteAngle) {
  const minutes = Math.floor((minuteAngle / 360) * 60);

  let hour = Math.floor((hourAngle / 360) * 12);
  if (hour === 0) hour = 12;

  if (minutes === 0) {
    return hour + " o'clock";
  }
  if (minutes === 15) {
    return 'quarter past ' + hour;
  }
  if (minutes === 30) {
    return 'half past ' + hour;
  }
  if (minutes === 45) {
    const nextHour = hour === 12 ? 1 : hour + 1;
    return 'quarter to ' + nextHour;
  }

  if (minutes < 30) {
    return minutes + ' minutes past ' + hour;
  }

  const to = 60 - minutes;
  const nextHour = hour === 12 ? 1 : hour + 1;
  return to + ' minutes to ' + nextHour;
}
