/**

Reverse Parenthesis

Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

All characters inside each pair of parentheses should be reversed.
Parentheses should be removed from the final result.
If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
Assume all parentheses are evenly balanced and correctly nested.

*/

function decode(s) {
  const stack = [];
  for (const char of s) {
    if (char === ')') {
      let temp = '';
      while (stack.length && stack[stack.length - 1] !== '(') {
        temp += stack.pop();
      }
      stack.pop();
      for (const c of temp) {
        stack.push(c);
      }
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}
