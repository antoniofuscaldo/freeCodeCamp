/**

2026 Winter Games Day 5: Cross-Country Skiing

Given an array of finish times for a cross-country ski race, convert them into times behind the winner.

Given times are strings in "H:MM:SS" format.
Given times will be in order from fastest to slowest.
The winners time (fastest time) should correspond to "0".
Each other time should show the time behind the winner, in the format "+M:SS".
For example, given ["1:25:32", "1:26:10", "1:27:05"], return ["0", "+0:38", "+1:33"].

*/

function getRelativeResults(results) {
  const toSec = (t) => {
    const [h, m, s] = t.split(':').map(Number);
    return h * 3600 + m * 60 + s;
  };

  const base = toSec(results[0]);
  const out = ['0'];

  for (let i = 1; i < results.length; i++) {
    const diff = toSec(results[i]) - base;
    const m = Math.floor(diff / 60);
    const s = diff % 60;
    out.push('+' + m + ':' + String(s).padStart(2, '0'));
  }

  return out;
}
