/**

24 to 12

Given a string representing a time of the day in the 24-hour format of "HHMM", return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".

Tests:
Waiting:1. to12("1124") should return "11:24 AM".
Waiting:2. to12("0900") should return "9:00 AM".
Waiting:3. to12("1455") should return "2:55 PM".
Waiting:4. to12("2346") should return "11:46 PM".
Waiting:5. to12("0030") should return "12:30 AM".

*/

export function to12(time) {
  const h = parseInt(time.slice(0, 2), 10);
  const m = time.slice(2);
  const period = h < 12 ? 'AM' : 'PM';
  const hour = h % 12 || 12;
  return `${hour}:${m} ${period}`;
}
