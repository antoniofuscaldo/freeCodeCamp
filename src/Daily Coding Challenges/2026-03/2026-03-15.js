/**

Captured Chess Pieces

Given an array of strings representing chess pieces you still have on the board, calculate the value of the pieces your opponent has captured.

In chess, you start with 16 pieces:

Piece	Abbreviation	Quantity	Value
Pawn	"P"	8	1
Rook	"R"	2	5
Knight	"N"	2	3
Bishop	"B"	2	3
Queen	"Q"	1	9
King	"K"	1	0
The given array will only contain the abbreviations above.
Any of the 16 pieces not included in the given array have been captured.
Return the total value of all captured pieces, unless...
If the King has been captured, return "Checkmate".

*/

function getCapturedValue(pieces) {
  const values = { P: 1, R: 5, N: 3, B: 3, Q: 9, K: 0 };
  const total = { P: 8, R: 2, N: 2, B: 2, Q: 1, K: 1 };

  if (!pieces.includes('K')) return 'Checkmate';

  let sum = 0;
  for (const k in total) {
    const missing = total[k] - pieces.filter((p) => p === k).length;
    sum += missing * values[k];
  }
  return sum;
}
