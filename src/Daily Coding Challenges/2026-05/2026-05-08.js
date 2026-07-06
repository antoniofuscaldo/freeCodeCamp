/**

Medication Reminder

Given an array of medications and a string representing the current time, return the next medication you need to take and how long until you need to take it.

Each medication is in the format [name, lastTaken], where name is the name of the medication and lastTaken is the time it was last taken.
All given times will be in "HH:MM" (24-hour) format.
Use the following medication schedule:

Name	Schedule
Deployxitrin	08:00, 16:00
Debuggamanizole	07:00, 13:00, 21:00
Mergeflictamine	every 4 hours
Return a string in the format "{name} in Hh Mm". For example, "Debuggamanizole in 2h 0m" or "Deployxitrin in 1h 5m".

Tests:
Waiting:1. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "10:00"]], "11:00") should return "Debuggamanizole in 2h 0m".
Waiting:2. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "14:55") should return "Deployxitrin in 1h 5m".
Waiting:3. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "17:15") should return "Mergeflictamine in 0h 45m".
Waiting:4. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "09:00"]], "12:59") should return "Debuggamanizole in 0h 1m".
Waiting:5. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "21:00"], ["Mergeflictamine", "03:00"]], "06:55") should return "Debuggamanizole in 0h 5m".
Waiting:6. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "07:30"]], "08:00") should return "Mergeflictamine in 3h 30m".

*/

export function medicationReminder(medications, currentTime) {
  const toMinutes = (time) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  };

  const current = toMinutes(currentTime);

  const schedules = {
    Deployxitrin: [8 * 60, 16 * 60],
    Debuggamanizole: [7 * 60, 13 * 60, 21 * 60],
  };

  function getNextDose(name, lastTaken) {
    // Mergeflictamine → every 4 hours from lastTaken
    if (name === 'Mergeflictamine') {
      let next = toMinutes(lastTaken) + 240;

      while (next <= current) {
        next += 240;
      }

      return next;
    }

    // Fixed schedule medications
    const times = schedules[name];

    for (const t of times) {
      if (t > current) {
        return t;
      }
    }

    // next day
    return times[0] + 1440;
  }

  let nextMedication = '';
  let smallestDiff = Infinity;

  for (const [name, lastTaken] of medications) {
    const nextDose = getNextDose(name, lastTaken);
    const diff = nextDose - current;

    if (diff < smallestDiff) {
      smallestDiff = diff;
      nextMedication = name;
    }
  }

  const hours = Math.floor(smallestDiff / 60);
  const minutes = smallestDiff % 60;

  return `${nextMedication} in ${hours}h ${minutes}m`;
}
