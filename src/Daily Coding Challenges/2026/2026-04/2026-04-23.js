/**

Closest Time Direction

Given two times, determine whether you can get from the first to the second faster by moving forward or backward.

Times are given in 24-hour format ("HH:MM")
The clock wraps around (23:59 goes to 00:00 when moving forward, and 00:00 goes to 23:59 when moving backwards)
Return:

"forward" if moving forward is shorter
"backward" if moving backward is shorter
"equal" if both directions take the same amount of time

*/

function getDirection(time1, time2) {
  const toMin = (t) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };

  const a = toMin(time1);
  const b = toMin(time2);

  const forward = (b - a + 1440) % 1440;
  const backward = (a - b + 1440) % 1440;

  if (forward < backward) return 'forward';
  if (backward < forward) return 'backward';
  return 'equal';
}
