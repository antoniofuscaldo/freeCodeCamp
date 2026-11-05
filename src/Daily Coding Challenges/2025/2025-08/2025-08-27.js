/**

Unorder of Operations

Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

Valid operators are +, -, *, /, and %.

*/

function evaluate(numbers, operators) {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const op = operators[(i - 1) % operators.length],
      num = numbers[i];
    switch (op) {
      case '+':
        result += num;
        break;
      case '-':
        result -= num;
        break;
      case '*':
        result *= num;
        break;
      case '/':
        result = Math.trunc(result / num);
        break;
      case '%':
        result %= num;
        break;
      default:
        throw new Error(`Invalid operator: ${op}`);
    }
  }
  return result;
}
