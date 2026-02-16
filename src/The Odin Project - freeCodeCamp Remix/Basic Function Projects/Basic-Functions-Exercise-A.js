/**

Basic Functions Exercise A

Create a function that takes in an integer. This function should return the given integer + 7 if the integer is less than 10. If the integer is greater than or equal to 10, it should return the given integer - 3.

The name of the function should be addOrSubtract.

*/

function addOrSubtract(integer) {
  if (integer < 10) {
    return integer + 7;
  } else {
    return integer - 3;
  }
}
