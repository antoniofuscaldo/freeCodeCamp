/**

Contrast Rating 2

Given two relative luminance values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

Calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:

Rating	Normal Text	Large Text
"AAA"	7.0+	4.5+
"AA"	4.5+	3.0+
"Fail"	below 4.5	below 3.0

Tests:
Waiting:1. getContrastRating(1.0, 0.0, false) should return "AAA".
Waiting:2. getContrastRating(0.9015, 0.1364, false) should return "AA".
Waiting:3. getContrastRating(0.8965, 0.1628, false) should return "Fail".
Waiting:4. getContrastRating(0.7469, 0.0957, true) should return "AAA".
Waiting:5. getContrastRating(0.7489, 0.2018, true) should return "AA".
Waiting:6. getContrastRating(0.6571, 0.1974, true) should return "Fail".

*/

export function getContrastRating(l1, l2, isLargeText) {
  const ratio = (l1 + 0.05) / (l2 + 0.05);
  if (isLargeText) {
    if (ratio >= 4.5) return 'AAA';
    if (ratio >= 3.0) return 'AA';
    return 'Fail';
  } else {
    if (ratio >= 7.0) return 'AAA';
    if (ratio >= 4.5) return 'AA';
    return 'Fail';
  }
}
