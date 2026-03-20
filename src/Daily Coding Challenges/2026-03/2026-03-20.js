/**

Equinox Shadows

Today is the equinox, when the sun is directly above the equator and perfectly overhead at noon. Given a time, determine the shadow cast by a 4-foot vertical pole.

The time will be a string in "HH:MM" 24-hour format (for example, "15:00" is 3pm).
You will only be given a time in 30 minute increments.
Rules:

The sun rises at 6am directly "east", and sets at 6pm directly "west".
A shadow always points opposite the sun.
The shadow's length (in feet) is the number of hours away from noon, cubed.
There is no shadow before sunrise (before 6am), after sunset (6pm or later), or at noon.
Return:

If a shadow exists, return "(length)ft (direction)". For example, "8ft west".
Otherwise, return "No shadow".
For example, given "10:00", return "8ft west" because 10am is 2 hours from noon, so 23 = 8 feet, and the shadow points west because the sun is in the east at 10am.

*/

function getShadow(time) {
  const [h, m] = time.split(':').map(Number);
  const t = h + m / 60;

  if (t < 6 || t >= 18 || t === 12) return 'No shadow';

  const hours = Math.abs(t - 12);
  const length = hours ** 3;
  const dir = t < 12 ? 'west' : 'east';

  return `${length}ft ${dir}`;
}
