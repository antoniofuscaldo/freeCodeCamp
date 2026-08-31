/**

Hex Generator

Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

The function should handle "red", "green", or "blue" as an input argument.
If the input is not one of those, the function should return "Invalid color".
The function should return a random six-character hex color code where the input color value is greater than any of the others.
Example of valid outputs for a given input:
Input	Output
"red"	"FF0000"
"green"	"00FF00"
"blue"	"0000FF"

Tests:
Waiting:1. generateHex("yellow") should return "Invalid color".
Waiting:2. generateHex("red") should return a six-character string.
Waiting:3. generateHex("red") should return a valid six-character hex color code.
Waiting:4. generateHex("red") should return a valid hex color with a higher red value than other colors.
Waiting:5. Calling generateHex("red") twice should return two different hex color values where red is dominant.
Waiting:6. Calling generateHex("green") twice should return two different hex color values where green is dominant.
Waiting:7. Calling generateHex("blue") twice should return two different hex color values where blue is dominant.

*/

export function generateHex(color) {
  if (typeof color !== 'string') return 'Invalid color';
  const c = color.toLowerCase();
  if (!['red', 'green', 'blue'].includes(c)) return 'Invalid color';

  const toHex = (v) => v.toString(16).toUpperCase().padStart(2, '0');

  const dominant = Math.floor(Math.random() * 128) + 128; // 128..255

  const other1 = Math.floor(Math.random() * dominant);
  const other2 = Math.floor(Math.random() * dominant);

  let r = 0,
    g = 0,
    b = 0;
  if (c === 'red') {
    r = dominant;
    g = other1;
    b = other2;
  } else if (c === 'green') {
    g = dominant;
    r = other1;
    b = other2;
  } else {
    // blue
    b = dominant;
    r = other1;
    g = other2;
  }

  return toHex(r) + toHex(g) + toHex(b);
}
