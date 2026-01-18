/**

Knight Moves
Given the position of a knight on a chessboard, return the number of valid squares the knight can move to.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:

A8	B8	C8	D8	E8	F8	G8	H8
A7	B7	C7	D7	E7	F7	G7	H7
A6	B6	C6	D6	E6	F6	G6	H6
A5	B5	C5	D5	E5	F5	G5	H5
A4	B4	C4	D4	E4	F4	G4	H4
A3	B3	C3	D3	E3	F3	G3	H3
A2	B2	C2	D2	E2	F2	G2	H2
A1	B1	C1	D1	E1	F1	G1	H1
A knight moves in an "L" shape: two squares in one direction (horizontal or vertical), and one square in the perpendicular direction.

This means a knight can move to up to eight possible positions, but fewer when near the edges of the board. For example, if a knight was at A1, it could only move to B3 or C2.

*/

function knightMoves(position) {
  const col = position.charCodeAt(0) - 64;
  const row = Number(position[1]);
  const moves = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1],
  ];
  let count = 0;
  for (const m of moves) {
    const c = col + m[0];
    const r = row + m[1];
    if (c >= 1 && c <= 8 && r >= 1 && r <= 8) count++;
  }
  return count;
}
