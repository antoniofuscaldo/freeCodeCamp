/**

Spoken Duration

Given a number of seconds, return the duration in spoken English.

Break the duration into hours, minutes, and seconds.
Skip any zero values.
Use singular or plural as appropriate ("1 hour", "2 hours").
If present, join the last two units with "and", and the second and third to last units with a comma ("1 hour, 2 minutes and 3 seconds").

Tests:
Waiting:1. getSpokenDuration(3723) should return "1 hour, 2 minutes and 3 seconds".
Waiting:2. getSpokenDuration(7295) should return "2 hours, 1 minute and 35 seconds".
Waiting:3. getSpokenDuration(8521) should return "2 hours, 22 minutes and 1 second".
Waiting:4. getSpokenDuration(435) should return "7 minutes and 15 seconds".
Waiting:5. getSpokenDuration(14455) should return "4 hours and 55 seconds".
Waiting:6. getSpokenDuration(72000) should return "20 hours".
Waiting:7. getSpokenDuration(1) should return "1 second".

*/

export function getSpokenDuration(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const parts = [];
  if (hrs) parts.push(hrs + ' ' + (hrs === 1 ? 'hour' : 'hours'));
  if (mins) parts.push(mins + ' ' + (mins === 1 ? 'minute' : 'minutes'));
  if (secs) parts.push(secs + ' ' + (secs === 1 ? 'second' : 'seconds'));

  if (parts.length === 0) return '0 seconds';
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return parts[0] + ' and ' + parts[1];
  return parts[0] + ', ' + parts[1] + ' and ' + parts[2];
}
