/**

Reverse Parenthesis

Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

All characters inside each pair of parentheses should be reversed.
Parentheses should be removed from the final result.
If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
Assume all parentheses are evenly balanced and correctly nested.

Tests:
Waiting:1. decode("(f(b(dc)e)a)") should return "abcdef".
Waiting:2. decode("((is?)(a(t d)h)e(n y( uo)r)aC)") should return "Can you read this?".
Waiting:3. decode("f(Ce(re))o((e(aC)m)d)p") should return "freeCodeCamp".

*/

export function decode(s) {
  const stack = [''];

  for (const ch of s) {
    if (ch === '(') {
      stack.push('');
    } else if (ch === ')') {
      const top = stack.pop();
      const rev = top.split('').reverse().join('');
      stack[stack.length - 1] += rev;
    } else {
      stack[stack.length - 1] += ch;
    }
  }

  return stack[0];
}
