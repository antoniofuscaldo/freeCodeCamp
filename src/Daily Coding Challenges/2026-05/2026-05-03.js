/**

Good Day

Given a time string in "HH:MM" format (24-hour clock), return:

"Good morning" for times 05:00 to 11:59
"Good afternoon" for times 12:00 to 17:59
"Good evening" for times 18:00 to 21:59
"Good night" for times 22:00 to 04:59

*/

function getGreeting(time) {
  const [h, m] = time.split(':').map(Number);
  const t = h * 60 + m;

  if (t >= 300 && t <= 719) return 'Good morning';
  if (t >= 720 && t <= 1079) return 'Good afternoon';
  if (t >= 1080 && t <= 1319) return 'Good evening';
  return 'Good night';
}
