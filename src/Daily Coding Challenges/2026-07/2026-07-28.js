/**

Contrast Rating 1

Given a contrast ratio and a boolean indicating whether the text is large, return the WCAG rating using the following table:

Rating	Normal Text	Large Text
"AAA"	7.0+	4.5+
"AA"	4.5+	3.0+
"Fail"	below 4.5	below 3.0

Tests:
Waiting:1. getContrastRating("7.5", false) should return "AAA".
Waiting:2. getContrastRating("4.8", false) should return "AA".
Waiting:3. getContrastRating("4.2", false) should return "Fail".
Waiting:4. getContrastRating("4.5", true) should return "AAA".
Waiting:5. getContrastRating("3.0", true) should return "AA".
Waiting:6. getContrastRating("2.7", false) should return "Fail".

*/

export function getContrastRating(ratio, isLargeText) {
  const r = parseFloat(ratio);
  if (isLargeText) {
    if (r >= 4.5) return 'AAA';
    if (r >= 3.0) return 'AA';
    return 'Fail';
  } else {
    if (r >= 7.0) return 'AAA';
    if (r >= 4.5) return 'AA';
    return 'Fail';
  }
}
