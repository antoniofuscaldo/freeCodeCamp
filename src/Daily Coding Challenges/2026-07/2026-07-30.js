/**

Contrast Rating 3

Given two arrays representing RGB values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

First, convert each RGB value to relative luminance:

Divide each channel [R, G, B] by 255 to get a value between 0 and 1
Apply the gamma correction formula to each channel:
If the channel value is less than or equal to 0.04045: channel / 12.92
Otherwise: ((channel + 0.055) / 1.055) ^ 2.4
Calculate luminance: 0.2126 * R + 0.7152 * G + 0.0722 * B
Then, calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:

Rating	Normal Text	Large Text
"AAA"	7.0+	4.5+
"AA"	4.5+	3.0+
"Fail"	below 4.5	below 3.0

Tests:
Waiting:1. getContrastRating([255, 255, 255], [0, 0, 0], false) should return "AAA".
Waiting:2. getContrastRating([215, 188, 188], [55, 55, 55], false) should return "AA".
Waiting:3. getContrastRating([143, 144, 210], [46, 47, 61], false) should return "Fail".
Waiting:4. getContrastRating([167, 167, 210], [53, 10, 53], true) should return "AAA".
Waiting:5. getContrastRating([135, 147, 155], [60, 70, 90], true) should return "AA".
Waiting:6. getContrastRating([125, 210, 195], [105, 130, 90], true) should return "Fail".

*/

export function getContrastRating(rgb1, rgb2, isLargeText) {
  function channelToLinear(c) {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  }

  function luminance(rgb) {
    const r = channelToLinear(rgb[0]);
    const g = channelToLinear(rgb[1]);
    const b = channelToLinear(rgb[2]);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  const L1 = luminance(rgb1);
  const L2 = luminance(rgb2);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  const ratio = (lighter + 0.05) / (darker + 0.05);

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
