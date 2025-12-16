/**

Speed Check

Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.

1 mile equals 1.60934 kilometers.
If you are travelling less than or equal to the speed limit, return "Not Speeding".
If you are travelling 5 KPH or less over the speed limit, return "Warning".
If you are travelling more than 5 KPH over the speed limit, return "Ticket".

*/

function speedCheck(speedMph, speedLimitKph) {
  const speedKph = speedMph * 1.60934;
  const overLimit = speedKph - speedLimitKph;
  if (overLimit <= 0) return 'Not Speeding';
  if (overLimit <= 5) return 'Warning';
  return 'Ticket';
}
