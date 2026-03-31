/**

Wake-Up Alarm

Given a string representing the time you set your alarm and a string representing the time you actually woke up, determine if you woke up early, on time, or late.

Both times will be given in "HH:MM" 24-hour format.
Return:

"early" if you woke up before your alarm time.
"on time" if you woke up at your alarm time, or within the 10 minute snooze window after the alarm time.
"late" if you woke up more than 10 minutes after your alarm time.
Both times are on the same day.

*/

function alarmCheck(alarmTime, wakeTime) {
  function toMinutes(t) {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  }

  const a = toMinutes(alarmTime),
    w = toMinutes(wakeTime);

  if (w < a) return 'early';
  if (w <= a + 10) return 'on time';
  return 'late';
}
