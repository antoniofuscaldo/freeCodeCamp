/**

Cooldown Time

Given two timestamps, the first representing when a user finished an exam, and the second representing the current time, determine whether the user can take an exam again.

Both timestamps will be given the format: "YYYY-MM-DDTHH:MM:SS", for example "2026-03-25T14:00:00". Note that the time is 24-hour clock.
A user must wait at least 48 hours before retaking an exam.

*/

function canRetake(finishTime, currentTime) {
  return new Date(currentTime) - new Date(finishTime) >= 48 * 3600 * 1000;
}
