/**

Meeting Time

Given a 3D array representing availability windows for multiple people, return the earliest time where everyone has one hour free. If no such time exists, return "None".

Each person's availability is an array of [start, end] integer pairs in 24-hour time. For example, [10, 12] would mean the person is available from 10 to 12. Start times range from 0-23, and end times range from 1-24.
For example, given:

[
  [[10, 12], [15, 16]], // person 1
  [[11, 14], [15, 16]]  // person 2
]
Return 11, the start of their first shared free hour.

Tests:
Waiting:1. getMeetingTime([[[10, 12], [15, 16]], [[11, 14], [15, 16]]]) should return 11.
Waiting:2. getMeetingTime([[[9, 10], [12, 15]], [[10, 11], [13, 14]], [[9, 11], [10, 14]]]) should return 13.
Waiting:3. getMeetingTime([[[7, 8], [9, 11], [12, 14], [15, 16]], [[8, 11], [12, 13], [14, 15]]]) should return 9.
Waiting:4. getMeetingTime([[[7, 8], [10, 12], [13, 15]], [[8, 11], [12, 13], [14, 15]], [[6, 7], [8, 9], [12, 13]]]) should return None.
Waiting:5. getMeetingTime([[[1, 3], [4, 6], [8, 10], [20, 23]], [[15, 16], [17, 18], [19, 22], [23, 24]], [[14, 16], [17, 23]], [[2, 4], [5, 6], [18, 19], [21, 22], [23, 24]]]) should return 21.

*/

export function getMeetingTime(availability) {
  for (let t = 0; t < 24; t++) {
    let ok = true;
    for (const person of availability) {
      let has = false;
      for (const [s, e] of person) {
        if (s <= t && e >= t + 1) {
          has = true;
          break;
        }
      }
      if (!has) {
        ok = false;
        break;
      }
    }
    if (ok) return t;
  }
  return 'None';
}
