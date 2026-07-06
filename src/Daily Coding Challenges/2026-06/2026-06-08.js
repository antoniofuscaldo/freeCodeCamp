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

Tests:
Waiting:1. getJetLagHours("Istanbul", "Hong Kong", 10, "east") should return 6.5.
Waiting:2. getJetLagHours("London", "New York", 8, "west") should return 5.8.
Waiting:3. getJetLagHours("Hong Kong", "Tokyo", 4, "east") should return 1.6.
Waiting:4. getJetLagHours("Dubai", "London", 7, "west") should return 4.7.
Waiting:5. getJetLagHours("Los Angeles", "Hong Kong", 15, "west") should return 17.5.
Waiting:6. getJetLagHours("Tokyo", "Dubai", 9, "west") should return 5.9.
Waiting:7. getJetLagHours("New York", "Istanbul", 10, "east") should return 9.5.

*/

export function getJetLagHours(
  departureCity,
  arrivalCity,
  flightDuration,
  direction,
) {
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
