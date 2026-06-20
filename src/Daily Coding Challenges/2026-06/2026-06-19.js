/**

Rental Cost

Given a rental timestamp, a return timestamp, and a rental tier, return the total cost of the rental including any late fees.

Given timestamps are UTC ISO strings, for example: "2026-06-18T18:30:00Z".
The rental tier is the number of days before the rental is due back: 1, 3, or 7.
Rentals are due back by 12:00 PM UTC or earlier on the last day of the rental period. For example, a 1-day rental checked out at any time on March 15 is due back by 12:00 PM UTC on March 16.
Each day past the due date and time incurs a late fee.
Pricing is as follows:

Tier	Base cost	Late fee per day
1 day	$4.99	$3.99
3 days	$3.99	$2.99
7 days	$2.99	$0.99
Return the total cost rounded to two decimal places in the format "$D.CC".

*/

function getRentalCost(rented, returned, tier) {
  const pricing = {
    1: { base: 4.99, late: 3.99 },
    3: { base: 3.99, late: 2.99 },
    7: { base: 2.99, late: 0.99 },
  };

  const p = pricing[tier];
  if (!p) return '$0.00';

  const rentedDate = new Date(rented);
  const returnedDate = new Date(returned);
  if (isNaN(rentedDate) || isNaN(returnedDate)) return '$0.00';

  // Start date is the UTC date part of the rented timestamp
  const year = rentedDate.getUTCFullYear();
  const month = rentedDate.getUTCMonth(); // 0-based
  const day = rentedDate.getUTCDate();

  // Due by 12:00 PM UTC on (start date + tier days)
  const dueMs = Date.UTC(year, month, day + tier, 12, 0, 0);
  const returnedMs = returnedDate.getTime();

  let lateDays = 0;
  if (returnedMs > dueMs) {
    const msPerDay = 24 * 60 * 60 * 1000;
    lateDays = Math.ceil((returnedMs - dueMs) / msPerDay);
  }

  const total = p.base + lateDays * p.late;
  return '$' + total.toFixed(2);
}
