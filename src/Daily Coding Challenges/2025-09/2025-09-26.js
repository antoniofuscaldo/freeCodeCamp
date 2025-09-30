/**

Caught Speeding

Given an array of numbers representing the speed at which vehicles were observed traveling, and a number representing the speed limit, return an array with two items, the number of vehicles that were speeding, followed by the average amount beyond the speed limit of those vehicles.

If there were no vehicles speeding, return [0, 0].

*/

function speeding(speeds, limit) {
  let over = speeds.filter((s) => s > limit).map((s) => s - limit);
  if (over.length === 0) return [0, 0];
  let avg = over.reduce((a, b) => a + b, 0) / over.length;
  return [over.length, avg];
}
