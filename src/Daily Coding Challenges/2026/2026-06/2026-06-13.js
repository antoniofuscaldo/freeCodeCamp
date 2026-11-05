/**

Zoning Regulations

Given a 2D grid (array of arrays) representing a city's building layout, return the coordinates of all buildings that are violating zoning rules.

Each cell in the grid contains one of the labels from the table below. A building is in violation if any of its (up to) 4 neighbors, horizontal or vertical, are a type it cannot be adjacent to.

Label	Type	Cannot be adjacent to
"i"	industrial	"R", "I"
"A"	Agricultural	"C"
"R"	Residential	"i", "C"
"I"	Institutional	"i"
"C"	Commercial	"R", "A"
"" (empty string)	undeveloped	no restrictions
Return the coordinates of all violating cells as an array of [row, col] pairs, in any order. If no violations exist, return an empty array.

Tests:
Waiting:1. getZoneViolations([["R", "C"], ["", "C"]]) should return [[0, 0], [0, 1]].
Waiting:2. getZoneViolations([["", "i"], ["", "R"], ["R", "I"]]) should return [[0, 1], [1, 1]].
Waiting:3. getZoneViolations([["A", "i", "C"], ["A", "", "C"], ["R", "R", "I"]]) should return [].
Waiting:4. getZoneViolations([["R", "R", "C", "R", "R"], ["R", "I", "C", "", "A"], ["R", "R", "", "i", "A"]]) should return [[0, 1], [0, 2], [0, 3]].
Waiting:5. getZoneViolations([["R", "A", "A", "", "i", "i"], ["R", "I", "", "C", "i", "i"], ["R", "", "C", "C", "A", "A"], ["R", "R", "C", "I", "R", "R"]]) should return [[2, 3], [2, 4], [3, 1], [3, 2]].

*/

export function getZoneViolations(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const rules = {
    i: new Set(['R', 'I']),
    A: new Set(['C']),
    R: new Set(['i', 'C']),
    I: new Set(['i']),
    C: new Set(['R', 'A']),
    '': new Set(),
  };

  const out = [];

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = grid[r][c];
      const forbidden = rules[cell];

      if (!forbidden || forbidden.size === 0) continue;

      let violation = false;

      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;

        const neighbor = grid[nr][nc];
        if (forbidden.has(neighbor)) {
          violation = true;
          break;
        }
      }

      if (violation) out.push([r, c]);
    }
  }

  return out;
}
