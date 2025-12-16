/**

Circles of given radius through two points
Given two points on a plane and a radius, usually two circles of given radius can be drawn through the points.

Exceptions:

A radius of zero should be treated as never describing circles (except in the case where the points are coincident).
If the points are coincident then an infinite number of circles with the point on their circumference can be drawn, unless the radius is equal to zero as well which then collapses the circles to a point.
If the points form a diameter then return a single circle.
If the points are too far apart then no circles can be drawn.
Implement a function that takes two points and a radius and returns the two circles through those points. For each resulting circle, provide the coordinates for the center of each circle rounded to four decimal digits. Return each coordinate as an array, and coordinates as an array of arrays.

For edge cases, return the following:

If points are on the diameter, return one point. If the radius is also zero however, return "Radius Zero".
If points are coincident, return "Coincident point. Infinite solutions".
If points are farther apart than the diameter, return "No intersection. Points further apart than circle diameter".
Sample inputs:

      p1                p2           r
0.1234, 0.9876    0.8765, 0.2345    2.0
0.0000, 2.0000    0.0000, 0.0000    1.0
0.1234, 0.9876    0.1234, 0.9876    2.0
0.1234, 0.9876    0.8765, 0.2345    0.5
0.1234, 0.9876    0.1234, 0.9876    0.0

*/

function getCircles(p1, p2, r) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  if (r === 0) return 'Radius Zero';
  if (x1 === x2 && y1 === y2) {
    return r === 0 ? 'Radius Zero' : 'Coincident point. Infinite solutions';
  }
  const dx = x2 - x1;
  const dy = y2 - y1;
  const q = Math.hypot(dx, dy);
  if (q > 2 * r) return 'No intersection. Points further apart than circle diameter';
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  if (q === 2 * r) return [mx, my];
  const d = Math.sqrt(r * r - (q / 2) * (q / 2));
  const ox = -dy * (d / q);
  const oy = dx * (d / q);
  const c1 = [+(mx + ox).toFixed(4), +(my + oy).toFixed(4)];
  const c2 = [+(mx - ox).toFixed(4), +(my - oy).toFixed(4)];
  return [c1, c2];
}
