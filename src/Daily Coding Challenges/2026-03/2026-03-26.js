/**

Movie Night

Given a string for the day of the week, another string for a showtime, and an integer number of tickets, return the total cost of the movie tickets for that showing.

The given day will be one of:

"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
"Sunday"
The showtime will be given in the format "H:MMam" or "H:MMpm". For example "10:00am" or "10:00pm".

Return the total cost in the format "$D.CC" using these rules:

Weekend (Friday - Sunday): $12.00 per ticket.
Weekday (Monday - Thursday): $10.00 per ticket.
Matinee (before 5:00pm): subtract $2.00 per ticket (except on Tuesdays).
Tuesdays: all tickets are $5.00 each.

*/

function getMovieNightCost(day, showtime, numberOfTickets) {
  if (day === 'Tuesday') return `$${(numberOfTickets * 5).toFixed(2)}`;

  const [time, period] = [showtime.slice(0, -2), showtime.slice(-2)];
  let [h, m] = time.split(':').map(Number);
  if (period === 'pm' && h !== 12) h += 12;
  if (period === 'am' && h === 12) h = 0;

  const weekend = ['Friday', 'Saturday', 'Sunday'].includes(day);
  let price = weekend ? 12 : 10;
  if (h < 17) price -= 2;

  return `$${(price * numberOfTickets).toFixed(2)}`;
}
