/**

Problem 39: Integer right triangles

If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ n, is the number of solutions maximized?

*/

function intRightTriangles(n) {
  var maxP = 0;
  var maxCount = 0;
  for (var p = 2; p <= n; p++) {
    var count = 0;
    for (var a = 2; a < p / 3; a++) {
      for (var b = a; b < (p - a) / 2; b++) {
        var c = p - a - b;
        if (a * a + b * b === c * c) count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      maxP = p;
    }
  }
  return maxP;
}

intRightTriangles(500);
