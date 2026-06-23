/**

BMI Calculator

Given a weight in pounds and a height in inches, return the BMI (Body Mass Index) rounded to one decimal place.

To get BMI: divide the weight by the height squared, then multiply the result by 703.

*/

function calculateBmi(weight, height) {
  return +((weight / (height * height)) * 703).toFixed(1);
}
