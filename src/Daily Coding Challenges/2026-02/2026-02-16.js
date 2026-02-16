/**

2026 Winter Games Day 11: Ice Hockey

Given an array of 6 ice hockey teams and their records after the round robin games, determine the match-ups for the semi-final round.

Each array item will have a team and their record in the format "TEAM: W-OTW-OTL-L". Where:
"W" is the number of wins in regulation, worth 3 points each
"OTW" is the number of overtime wins, worth 2 points each
"OTL" is the number of overtime losses, worth 1 point each
"L" is the number of losses, worth 0 points each
For example, "FIN: 2-2-1-0" would have 11 points after adding up their record.

Find the total number of points for each team and return "The semi-final games will be (1st) vs (4th) and (2nd) vs (3rd).". For example, "The semi-final games will be FIN vs SWE and CAN vs USA."

*/

function getSemifinalMatchups(teams) {
  const scores = teams.map((t) => {
    const [name, rec] = t.split(': ');
    const [w, otw, otl] = rec.split('-').map(Number);
    const pts = w * 3 + otw * 2 + otl;
    return { name, pts };
  });

  scores.sort((a, b) => b.pts - a.pts);

  return `The semi-final games will be ${scores[0].name} vs ${scores[3].name} and ${scores[1].name} vs ${scores[2].name}.`;
}
