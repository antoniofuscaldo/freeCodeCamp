/**

Integer Hypotenuse

Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.

The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a2 + b2 = c2).

*/

function isIntegerHypotenuse(a, b) {
  return Number.isInteger(Math.sqrt(a * a + b * b));
}
