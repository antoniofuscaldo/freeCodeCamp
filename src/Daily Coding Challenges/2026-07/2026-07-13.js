/**

Tally Counter

Given a string of tally marks, return the total count represented.

Each pipe "|" represents one count.
Every fifth mark is represented as a forward slash "/", completing a group of five ("||||/").
Groups are separated by a space.

Tests:
Waiting:1. getTallyCount("||||") should return 4.
Waiting:2. getTallyCount("||||/") should return 5.
Waiting:3. getTallyCount("||||/ |||") should return 8.
Waiting:4. getTallyCount("||||/ ||||/ ||||/ ||") should return 17.
Waiting:5. getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |") should return 41.

*/

export function getTallyCount(str) {
  let total = 0;
  for (const ch of str) {
    if (ch === '|' || ch === '/') total += 1;
  }
  return total;
}
