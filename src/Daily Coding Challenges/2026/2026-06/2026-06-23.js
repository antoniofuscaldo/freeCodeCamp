/**

BMI Calculator

Given a weight in pounds and a height in inches, return the BMI (Body Mass Index) rounded to one decimal place.

To get BMI: divide the weight by the height squared, then multiply the result by 703.

Tests:
Waiting:1. calculateBmi(180, 70) should return 25.8.
Waiting:2. calculateBmi(140, 64) should return 24.0.
Waiting:3. calculateBmi(160, 76) should return 19.5.
Waiting:4. calculateBmi(200, 60) should return 39.1.
Waiting:5. calculateBmi(150, 68) should return 22.8.

*/

export function calculateBmi(weight, height) {
  return +((weight / (height * height)) * 703).toFixed(1);
}
