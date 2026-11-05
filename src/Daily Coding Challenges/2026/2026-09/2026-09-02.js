/**

RGB to Hex

Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

Input	Output
"rgb(255, 255, 255)"	"#ffffff"
"rgb(1, 2, 3)"	"#010203"
Make any letters lowercase.
Return a # followed by six characters. Don't use any shorthand values.

Tests:
Waiting:1. rgbToHex("rgb(255, 255, 255)") should return "#ffffff".
Waiting:2. rgbToHex("rgb(1, 11, 111)") should return "#010b6f".
Waiting:3. rgbToHex("rgb(173, 216, 230)") should return "#add8e6".
Waiting:4. rgbToHex("rgb(79, 123, 201)") should return "#4f7bc9".

*/

export function rgbToHex(rgb) {
  const [r, g, b] = rgb
    .replace(/[^\d,]/g, '')
    .split(',')
    .map(Number);

  const toHex = (n) => n.toString(16).padStart(2, '0');

  return '#' + toHex(r) + toHex(g) + toHex(b);
}
