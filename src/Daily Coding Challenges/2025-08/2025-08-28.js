/**

Second Best

Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

The second most expensive laptop if it is within your budget, or
The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.

*/

function getLaptopCost(laptops, budget) {
  const unique = [...new Set(laptops)].sort((a, b) => b - a);
  if (unique.length >= 2 && unique[1] <= budget) {
    return unique[1];
  }
  for (const price of unique) {
    if (price <= budget) return price;
  }
  return 0;
}
