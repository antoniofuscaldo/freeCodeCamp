/**

2026 Winter Games Day 16: Curling

Given a 5x5 matrix representing the "house" at the end of a curling round, determine which team scores and how many points they score.

The layout:

The center cell (index [2, 2]) is the "button".
The 8 cells directly surrounding the button represent ring 1.
And the 16 cells on the outer edge of the house represent ring 2.
In the given matrix:

"." represents an empty space.
"R" represents a space with a red stone.
"Y" represents a space with a yellow stone.
Scoring rules:

Only one team can score per round.
The team with the stone closest to the button scores.
The scoring team earns 1 point for each of their stones that is closer to the button than the opponent's closest stone.
The lower the ring number, the closer to the center the stone is.
If both teams' closest stone is the same distance from the center, no team scores.
Return:

A string in the format "team: number_of_points". e.g: "R: 2".
or "No points awarded" if neither team scored any points.
For example, given:

[
  [".", ".", "R", ".", "."],
  [".", "R", ".", ".", "."],
  ["Y", ".", ".", ".", "."],
  [".", "R", ".", ".", "."],
  [".", ".", ".", ".", "."]
]
Return "R: 2". The two red stones in ring 1 are tied for the closest and are the only two stones closer than yellows closest.

*/

function scoreCurling(house) {
  const dist = [
    [2, 2],
    [1, 2],
    [2, 1],
    [2, 3],
    [3, 2],
  ];

  const getRing = (r, c) => {
    if (r === 2 && c === 2) return 0;
    if (Math.abs(r - 2) <= 1 && Math.abs(c - 2) <= 1) return 1;
    return 2;
  };

  let reds = [];
  let yellows = [];

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const v = house[r][c];
      if (v === 'R') reds.push(getRing(r, c));
      if (v === 'Y') yellows.push(getRing(r, c));
    }
  }

  if (!reds.length && !yellows.length) return 'No points awarded';

  const rMin = reds.length ? Math.min(...reds) : Infinity;
  const yMin = yellows.length ? Math.min(...yellows) : Infinity;

  if (rMin === yMin) return 'No points awarded';

  const winner = rMin < yMin ? 'R' : 'Y';
  const loserMin = winner === 'R' ? yMin : rMin;
  const arr = winner === 'R' ? reds : yellows;

  const pts = arr.filter((x) => x < loserMin).length;

  return pts ? `${winner}: ${pts}` : 'No points awarded';
}
