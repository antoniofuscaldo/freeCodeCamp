/**

Pizza Party

Given an array of hours worked today per person, return the number of pizzas to order for a pizza party.

Divide each person's hours worked by 3 to get their slice count.
You can't eat a partial slice, so round each person's slice count up to the nearest whole number.
Each person gets a minimum of two slices.
Each pizza has 8 slices. Round the total number of pizzas up to the nearest whole pizza.

*/

function getPizzasToOrder(hoursWorked) {
  let slices = 0;
  for (const h of hoursWorked) {
    const per = Math.max(2, Math.ceil(h / 3));
    slices += per;
  }
  return Math.ceil(slices / 8);
}
