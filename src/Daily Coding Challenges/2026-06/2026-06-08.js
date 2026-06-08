/**

Jet Lagged

Given a departure city, an arrival city, a flight duration in hours, and a direction of travel, return the number of jet lag hours the traveller is experiencing.

The given cities will be from the following list that includes their UTC offset:

City	Offset
"Los Angeles"	-8
"New York"	-5
"London"	0
"Istanbul"	+3
"Dubai"	+4
"Hong Kong"	+8
"Tokyo"	+9
To calculate jet lag hours:

Find the timezone difference in hours between the two cities.
Determine the direction multiplier. If travelling "east", it's 1.5, otherwise, it's 1.0.
Get the jet lag hours with the formula: timezone difference + (flight duration * 0.1) * direction multiplier
Return the jet lag hours rounded to one decimal place.

*/

function getJetLagHours(departureCity, arrivalCity, flightDuration, direction) {
  const offsets = {
    'Los Angeles': -8,
    'New York': -5,
    London: 0,
    Istanbul: 3,
    Dubai: 4,
    'Hong Kong': 8,
    Tokyo: 9,
  };

  const diff = Math.abs(offsets[arrivalCity] - offsets[departureCity]);
  const mult = direction === 'east' ? 1.5 : 1.0;
  const hours = diff + flightDuration * 0.1 * mult;

  return Number(hours.toFixed(1));
}
