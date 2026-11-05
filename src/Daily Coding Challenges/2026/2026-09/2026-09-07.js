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

Tests:
Waiting:1. parseRomanNumeral("III") should return 3.
Waiting:2. parseRomanNumeral("IV") should return 4.
Waiting:3. parseRomanNumeral("XXVI") should return 26.
Waiting:4. parseRomanNumeral("XCIX") should return 99.
Waiting:5. parseRomanNumeral("CDLX") should return 460.
Waiting:6. parseRomanNumeral("DIV") should return 504.
Waiting:7. parseRomanNumeral("MMXXV") should return 2025.

*/

export function parseRomanNumeral(numeral) {
  const map = {
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
    const curr = map[numeral[i]];
    const next = map[numeral[i + 1]];

    if (next && curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }

  return total;
}
