/**

Trail Traversal
Given an array of strings representing your trail map, return a string of the moves needed to get to your goal.

The given strings will contain the values:

"C": Your current location
"G": Your goal
"T": Traversable parts of the trail
"-": Untraversable parts of the map
Return a string with the moves needed to follow the trail from your location to your goal where:

"R" is a move right

"D" is a move down

"L" is a move left

"U" is a move up

There will always be a single continuous trail, without any branching, from your current location to your goal.

Each trail location will have a maximum of two traversable locations touching it.

For example, given:

[
  "-CT--",
  "--T--",
  "--TT-",
  "---T-",
  "---G-"
]
Return "RDDRDD".

*/

const navigateTrail = (m) => {
  const h = m.length,
    w = m[0].length;
  let r,
    c,
    pr = -1,
    pc = -1,
    out = '';

  for (let i = 0; i < h; i++)
    for (let j = 0; j < w; j++) if (m[i][j] === 'C') ((r = i), (c = j));

  const d = [
    [0, 1, 'R'],
    [1, 0, 'D'],
    [0, -1, 'L'],
    [-1, 0, 'U'],
  ];

  while (m[r][c] !== 'G') {
    for (const [dr, dc, mv] of d) {
      const nr = r + dr,
        nc = c + dc;
      if (nr === pr && nc === pc) continue;
      if (
        nr >= 0 &&
        nr < h &&
        nc >= 0 &&
        nc < w &&
        (m[nr][nc] === 'T' || m[nr][nc] === 'G')
      ) {
        out += mv;
        pr = r;
        pc = c;
        r = nr;
        c = nc;
        break;
      }
    }
  }
  return out;
};
