/**

Bingo Range

Given a bingo letter, return the number range associated with that letter.

Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75
Return an array with all numbers in the range from smallest to largest.

*/

function getBingoRange(letter) {
  const ranges = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75],
  };

  const [a, b] = ranges[letter];
  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}
