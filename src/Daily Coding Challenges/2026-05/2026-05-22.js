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

*/

function getMeetingTime(availability) {
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
