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

*/

function medicationReminder(medications, currentTime) {
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
