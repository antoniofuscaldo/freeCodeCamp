/**

Rectangle Count

Given two positive integers representing the width and height of a rectangle, determine how many rectangles can fit in the given one.

Only count rectangles with integer width and height.
For example, given 1 and 3, return 6. Three 1x1 rectangles, two 1x2 rectangles, and one 1x3 rectangle.

Tests:
Waiting:1. countRectangles(1, 3) should return 6.
Waiting:2. countRectangles(3, 2) should return 18.
Waiting:3. countRectangles(1, 2) should return 3.
Waiting:4. countRectangles(5, 4) should return 150.
Waiting:5. countRectangles(11, 19) should return 12540.

*/

function countRectangles(width, height) {
  return ((width * (width + 1)) / 2) * ((height * (height + 1)) / 2);
}
