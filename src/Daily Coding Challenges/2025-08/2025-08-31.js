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

*/

function generateHex(color) {
  color = color.toLowerCase();
  const rand = () => Math.floor(Math.random() * 255);
  let r = 0,
    g = 0,
    b = 0;
  if (color === "red") {
    r = 200 + (rand() % 56);
    g = rand() % r;
    b = rand() % r;
  } else if (color === "green") {
    g = 200 + (rand() % 56);
    r = rand() % g;
    b = rand() % g;
  } else if (color === "blue") {
    b = 200 + (rand() % 56);
    r = rand() % b;
    g = rand() % b;
  } else {
    return "Invalid color";
  }
  const toHex = (n) => n.toString(16).padStart(2, "0").toUpperCase();
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}
