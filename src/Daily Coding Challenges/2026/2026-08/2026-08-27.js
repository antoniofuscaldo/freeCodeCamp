/**

Unorder of Operations

Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

Valid operators are +, -, *, /, and %.

Tests:
Waiting:1. evaluate([5, 6, 7, 8, 9], ['+', '-']) should return 3
Waiting:2. evaluate([17, 61, 40, 24, 38, 14], ['+', '%']) should return 38
Waiting:3. evaluate([20, 2, 4, 24, 12, 3], ['*', '/']) should return 60
Waiting:4. evaluate([11, 4, 10, 17, 2], ['*', '*', '%']) should return 30
Waiting:5. evaluate([33, 11, 29, 13], ['/', '-']) should return -2

*/

export function evaluate(numbers, operators) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  if (!Array.isArray(operators) || operators.length === 0) {
    return numbers[0];
  }

  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const op = operators[(i - 1) % operators.length];
    const val = numbers[i];

    switch (op) {
      case '+':
        result = result + val;
        break;
      case '-':
        result = result - val;
        break;
      case '*':
        result = result * val;
        break;
      case '/':
        result = Math.trunc(result / val);
        break;
      case '%':
        result = result % val;
        break;
      default:
        throw new Error('Unsupported operator: ' + op);
    }
  }

  return result;
}
