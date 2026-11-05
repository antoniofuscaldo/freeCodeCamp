/**

Roman Numeral Parser

Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000

Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

*/

function parseRomanNumeral(numeral) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < numeral.length; i++) {
    const current = values[numeral[i]],
      next = values[numeral[i + 1]];
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
}
