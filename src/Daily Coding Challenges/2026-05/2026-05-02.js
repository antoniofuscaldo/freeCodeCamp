/**

Deepest Brackets

Given a string containing balanced brackets, return the content of the deepest nested brackets.

Brackets can be any of the three types: (), [], and {}.
The input will always have a single deepest group.
For example, given "(hello (world))", return "world".

*/

function getDeepestBrackets(str) {
  const open = '([{';
  const close = ')]}';
  let depth = 0;
  let max = 0;
  let start = 0;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (open.includes(c)) {
      depth++;
      if (depth > max) {
        max = depth;
        start = i + 1;
      }
    } else if (close.includes(c)) {
      if (depth === max) result = str.slice(start, i);
      depth--;
    }
  }

  return result;
}
