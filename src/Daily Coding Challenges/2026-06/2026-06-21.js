/**

Summer Solstice

Today is the summer solstice, the longest day of the year in the Northern Hemisphere and the shortest in the Southern. Given a latitude, return a string representing daytime and nighttime hours.

The latitude will be between 90 (north pole) and -90 (south pole), inclusive
The number of daytime hours = 12 + (latitude / 90) * 12
Round the daytime hours to the nearest even number
Return a 24-character string using "☀️" for daytime hours and "🌑" for nighttime hours, where:

Each character represents one hour, starting at midnight (hour 0)
Sunrise and sunset fall symmetrically around noon
For example, a latitude of 0 (the equator) has 12 hours of daylight, so sunrise is at 6:00 AM and sunset is at 6:00 PM. Return: "🌑🌑🌑🌑🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑🌑🌑🌑🌑".

*/

function getDaytimeHours(latitude) {
  const raw = 12 + (latitude / 90) * 12;
  let day = Math.round(raw / 2) * 2;
  if (day < 0) day = 0;
  if (day > 24) day = 24;

  const half = day / 2;
  const sunrise = 12 - half;
  const sunset = 12 + half;

  let out = '';
  for (let h = 0; h < 24; h++) {
    out += h >= sunrise && h < sunset ? '☀️' : '🌑';
  }
  return out;
}
