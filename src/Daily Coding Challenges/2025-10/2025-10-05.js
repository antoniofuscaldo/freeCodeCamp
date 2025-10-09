/**

Space Week Day 2: Exoplanet Search

For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.

Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
Characters 0-9 correspond to luminosity levels 0-9.
Characters A-Z correspond to luminosity levels 10-35.
A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.

*/

function hasExoplanet(readings) {
  let values = [];
  for (let ch of readings) {
    if (/[0-9]/.test(ch)) values.push(parseInt(ch));
    else values.push(ch.charCodeAt(0) - 55);
  }

  let avg = values.reduce((a, b) => a + b, 0) / values.length;
  let threshold = avg * 0.8;

  for (let v of values) {
    if (v <= threshold) return true;
  }
  return false;
}
