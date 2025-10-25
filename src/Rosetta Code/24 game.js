/**

24 game

The 24 Game tests a person's mental arithmetic.

The aim of the game is to arrange four numbers in a way that when evaluated, the result is 24

Implement a function that takes a string of four digits as its argument, with each digit from 1 to 9 (inclusive) with repetitions allowed, and returns an arithmetic expression that evaluates to the number 24. If no such solution exists, return "no solution exists".

Rules:

Only the following operators/functions are allowed: multiplication, division, addition, subtraction.
Division should use floating point or rational arithmetic, etc, to preserve remainders.
Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).
The order of the digits when given does not have to be preserved.
Example input	Example output
solve24("4878");	(7-8/8)*4
solve24("1234");	3*1*4*2
solve24("6789");	(6*8)/(9-7)
solve24("1127");	(1+7)*(2+1)

*/

function solve24(numStr) {
  const nums = numStr.split("").map(Number);
  const ops = ["+", "-", "*", "/"];

  function* permutations(arr) {
    if (arr.length === 1) yield arr;
    else {
      for (let i = 0; i < arr.length; i++) {
        const rest = arr.slice(0, i).concat(arr.slice(i + 1));
        for (let perm of permutations(rest)) {
          yield [arr[i], ...perm];
        }
      }
    }
  }

  function applyOp(a, b, op) {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return b !== 0 ? a / b : null;
  }

  function tryAll(a, b, c, d) {
    for (let op1 of ops) {
      for (let op2 of ops) {
        for (let op3 of ops) {
          const exprs = [
            `(${a}${op1}${b})${op2}(${c}${op3}${d})`,
            `((${a}${op1}${b})${op2}${c})${op3}${d}`,
            `(${a}${op1}(${b}${op2}${c}))${op3}${d}`,
            `${a}${op1}((${b}${op2}${c})${op3}${d})`,
            `${a}${op1}(${b}${op2}(${c}${op3}${d}))`,
          ];
          for (let expr of exprs) {
            try {
              const val = eval(expr);
              if (Math.abs(val - 24) < 1e-6) return expr;
            } catch {}
          }
        }
      }
    }
    return null;
  }

  for (let perm of permutations(nums)) {
    const res = tryAll(...perm);
    if (res) return res;
  }

  return "no solution exists";
}
