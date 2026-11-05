/**

SpOoKy~CaSe

Given a string representing a variable name, convert it to "spooky case" using the following constraints:

Replace all underscores (_), and hyphens (-) with a tilde (~).
Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.
For example, given hello_world, return HeLlO~wOrLd.

*/

function spookify(boo) {
  boo = boo.replace(/[_-]/g, '~');
  let count = 0,
    result = '';
  for (const ch of boo) {
    if (ch === '~') {
      result += '~';
      continue;
    }
    if (count % 2 === 0) {
      result += ch.toUpperCase();
    } else {
      result += ch.toLowerCase();
    }
    count++;
  }
  return result;
}
