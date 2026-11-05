/**

Equation Validation

Given a string representing a math equation, determine whether it is correct.

The left side may contain up to three positive integers and the operators +, -, *, and /.
The equation will be given in the format: "number operator number = number" (with two or three numbers on the left). For example: "2 + 2 = 4" or "2 + 3 - 1 = 4".
The right side will always be a single integer.
Follow standard order of operations: multiplication and division are evaluated before addition and subtraction, from left-to-right.

*/

function isValidEquation(equation) {
  const [left, right] = equation.split('=').map((s) => s.trim()),
    tokens = left.split(' '),
    nums = [],
    ops = [];
  for (let i = 0; i < tokens.length; i++) {
    if (i % 2 === 0) nums.push(Number(tokens[i]));
    else ops.push(tokens[i]);
  }
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === '*' || ops[i] === '/') {
      const a = nums[i],
        b = nums[i + 1],
        v = ops[i] === '*' ? a * b : a / b;
      nums.splice(i, 2, v);
      ops.splice(i, 1);
      i--;
    }
  }
  let result = nums[0];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === '+') result += nums[i + 1];
    else result -= nums[i + 1];
  }
  return result === Number(right);
}
