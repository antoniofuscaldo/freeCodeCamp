/**

Rectangle Count

Given two positive integers representing the width and height of a rectangle, determine how many rectangles can fit in the given one.

Only count rectangles with integer width and height.
For example, given 1 and 3, return 6. Three 1x1 rectangles, two 1x2 rectangles, and one 1x3 rectangle.

*/

function countRectangles(width, height) {
  let total = 0;
  for (let w = 1; w <= width; w++) {
    for (let h = 1; h <= height; h++) {
      total += (width - w + 1) * (height - h + 1);
    }
  }
  return total;
}
