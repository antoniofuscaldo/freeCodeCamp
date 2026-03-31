/**

Truncate the Text 2

Given a string, return a new string that is truncated so that the total width of the characters does not exceed 50 units.

Each character has a specific width:

Letters	Width
"ilI"	1
"fjrt"	2
"abcdeghkmnopqrstuvwxyzJL"	3
"ABCDEFGHKMNOPQRSTUVWXYZ"	4
The table above includes all upper and lower case letters. Additionally:

Spaces (" ") have a width of 2

Periods (".") have a width of 1

If the given string is 50 units or less, return the string as-is, otherwise

Truncate the string and add three periods at the end ("...") so it's total width, including the three periods, is as close as possible to 60 units without going over.

*/

function truncateText(str) {
  function width(c) {
    if ('ilI'.includes(c)) return 1;
    if ('fjrt'.includes(c)) return 2;
    if ('abcdeghkmnopqrstuvwxyzJL'.includes(c)) return 3;
    if ('ABCDEFGHKMNOPQRSTUVWXYZ'.includes(c)) return 4;
    if (c === ' ') return 2;
    if (c === '.') return 1;
    return 0;
  }

  let total = 0;
  for (const c of str) total += width(c);
  if (total <= 50) return str;

  let cur = 0,
    out = '';

  for (const c of str) {
    const w = width(c);
    if (cur + w + 3 > 50) break;
    cur += w;
    out += c;
  }

  return `${out}...`;
}
