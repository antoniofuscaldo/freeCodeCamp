/**

Binary Crossword

Given a character, determine if its 8-bit binary representation can be found in the following grid, horizontally or vertically in either direction:

0 1 0 0 0 0 0 1
0 1 1 0 1 1 1 1
0 1 0 0 0 1 0 0
0 1 1 0 0 1 0 1
0 1 0 1 0 0 1 0
0 1 0 1 0 1 0 0
0 1 1 0 1 0 0 0
1 0 1 0 1 1 1 0
For example, "A" has the binary representation 01000001, which appears in the first row from left to right.

*/

function isInCrossword(char) {
  const grid = [
    [0, 1, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
  ];

  const bin = char.charCodeAt(0).toString(2).padStart(8, '0');

  for (let r = 0; r < 8; r++) {
    const row = grid[r].join('');
    if (row.includes(bin) || row.split('').reverse().join('').includes(bin))
      return true;
  }

  for (let c = 0; c < 8; c++) {
    let col = '';
    for (let r = 0; r < 8; r++) col += grid[r][c];
    if (col.includes(bin) || col.split('').reverse().join('').includes(bin))
      return true;
  }

  return false;
}
