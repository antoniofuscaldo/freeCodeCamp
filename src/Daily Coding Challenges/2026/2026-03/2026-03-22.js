/**

Coffee Roast Detector

Given a string representing the beans used to make a cup of coffee, determine the roast of the cup.

The given string will contain the following characters, each representing a type of bean:

An apostrophe (') is a light roast bean worth 1 point each.
A dash (-) is a medium roast bean worth 2 points each.
A period (.) is a dark roast bean worth 3 points each.
The roast level is determined by the average of all the beans.

Return:

"Light" if the average is less than 1.75.
"Medium" if the average is 1.75 to 2.5.
"Dark" if the average is greater than 2.5.

*/

function detectRoast(beans) {
  const map = { "'": 1, '-': 2, '.': 3 },
    avg = [...beans].reduce((s, c) => s + map[c], 0) / beans.length;

  if (avg < 1.75) return 'Light';
  if (avg <= 2.5) return 'Medium';
  return 'Dark';
}
