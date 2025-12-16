/**

Balanced brackets

Determine whether a generated string of brackets is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.

Examples:

Input	Output
[]	true
][	false
[][]	true
][]	false
[]][[]	false
[[[[]]]]	true

*/

function isBalanced(str) {
  const stack = [];
  for (const ch of str) {
    if (ch === '[') {
      stack.push(ch);
    } else if (ch === ']') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
