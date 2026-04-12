/**

Next Bingo Number
Given a bingo number, return the next bingo number sequentially.

A bingo number is a single letter followed by a number in its range according to this chart:

Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75
For example, given "B10", return "B11", the next bingo number. If given the last bingo number, return "B1".

*/

function getNextBingoNumber(n) {
  const letter = n[0];
  const num = Number(n.slice(1));

  let val = num;
  if (letter === 'I') val = num;
  else if (letter === 'N') val = num;
  else if (letter === 'G') val = num;
  else if (letter === 'O') val = num;

  let next = val === 75 ? 1 : val + 1;

  let l;
  if (next >= 1 && next <= 15) l = 'B';
  else if (next >= 16 && next <= 30) l = 'I';
  else if (next >= 31 && next <= 45) l = 'N';
  else if (next >= 46 && next <= 60) l = 'G';
  else l = 'O';

  return l + next;
}
