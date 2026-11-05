/**

 Resolution Streak

 Given an array of arrays, where each sub-array represents a day of your resolution activities and contains three integers: the number of steps walked that day, the minutes of screen time that day, and the number of pages read that day; determine if you are keeping your resolutions.

 The first sub-array is day 1, and second day 2, and so on.
 A day is considered successful if all three of the following goals are met:

 You walked at least 10,000 steps.
 You had no more than 120 minutes of screen time.
 You read at least five pages.
 If all of the given days are successful, return "Resolution on track: N day streak." Where N is the number of successful days.

 If one or more days is not a success, return "Resolution failed on day X: N day streak.". Where X is the day number of the first unsuccessful day, and N is the number of successful days before the first unsuccessful day.

 */

function resolutionStreak(days) {
  for (let i = 0; i < days.length; i++) {
    const [steps, screen, pages] = days[i],
      success = steps >= 10000 && screen <= 120 && pages >= 5;

    if (!success) {
      return `Resolution failed on day ${i + 1}: ${i} day streak.`;
    }
  }

  return `Resolution on track: ${days.length} day streak.`;
}
