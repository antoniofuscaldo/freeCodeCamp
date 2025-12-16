/**

Problem 57: Square root convergents

https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-57-square-root-convergents

*/

function addStr(a, b) {
  let i = a.length - 1,
    j = b.length - 1,
    carry = 0,
    out = [];
  while (i >= 0 || j >= 0 || carry) {
    const da = i >= 0 ? a.charCodeAt(i) - 48 : 0;
    const db = j >= 0 ? b.charCodeAt(j) - 48 : 0;
    const s = da + db + carry;
    out.push(String.fromCharCode(48 + (s % 10)));
    carry = (s / 10) | 0;
    i--;
    j--;
  }
  return out.reverse().join('');
}

function squareRootConvergents(n) {
  let p = '3',
    q = '2',
    count = 0;
  for (let k = 1; k <= n; k++) {
    if (p.length > q.length) count++;
    const twoQ = addStr(q, q);
    const nextP = addStr(p, twoQ);
    const nextQ = addStr(p, q);
    p = nextP;
    q = nextQ;
  }
  return count;
}

squareRootConvergents(1000);
