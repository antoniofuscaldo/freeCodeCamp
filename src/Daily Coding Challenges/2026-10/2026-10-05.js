/**

Space Week Day 2: Exoplanet Search

For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.

Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
Characters 0-9 correspond to luminosity levels 0-9.
Characters A-Z correspond to luminosity levels 10-35.
A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.

Tests:
Waiting:1. hasExoplanet("665544554") should return false.
Waiting:2. hasExoplanet("FGFFCFFGG") should return true.
Waiting:3. hasExoplanet("MONOPLONOMONPLNOMPNOMP") should return false.
Waiting:4. hasExoplanet("FREECODECAMP") should return true.
Waiting:5. hasExoplanet("9AB98AB9BC98A") should return false.
Waiting:6. hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") should return true.

*/

export function hasExoplanet(readings) {
  const values = [...readings].map((ch) =>
    ch >= '0' && ch <= '9' ? Number(ch) : ch.charCodeAt(0) - 55,
  );

  const average = values.reduce((a, b) => a + b, 0) / values.length;

  return values.some((v) => v <= average * 0.8);
}
