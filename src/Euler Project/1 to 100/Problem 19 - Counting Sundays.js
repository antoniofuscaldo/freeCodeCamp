function countingSundays(firstYear, lastYear) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  let count = 0,
    dayOfWeek = 1;

  for (let year = 1900; year <= lastYear; year++) {
    for (let month = 0; month < 12; month++) {
      if (year >= firstYear && dayOfWeek === 0) {
        count++;
      }
      let days = daysInMonth[month];
      if (month === 1 && isLeap(year)) days = 29;
      dayOfWeek = (dayOfWeek + days) % 7;
    }
  }

  return count;
}

countingSundays(1943, 1946);
