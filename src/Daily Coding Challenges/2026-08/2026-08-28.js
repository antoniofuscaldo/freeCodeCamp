/**

Second Best

Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

The second most expensive laptop if it is within your budget, or
The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.

Tests:
Waiting:1. getLaptopCost([1500, 2000, 1800, 1400], 1900) should return 1800
Waiting:2. getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900) should return 1800
Waiting:3. getLaptopCost([2099, 1599, 1899, 1499], 2200) should return 1899
Waiting:4. getLaptopCost([2099, 1599, 1899, 1499], 1000) should return 0
Waiting:5. getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450) should return 1400

*/

export function getLaptopCost(laptops, budget) {
  const uniqDesc = Array.from(new Set(laptops)).sort((a, b) => b - a);

  if (uniqDesc.length === 0) return 0;

  if (uniqDesc.length >= 2 && uniqDesc[1] <= budget) {
    return uniqDesc[1];
  }

  for (const price of uniqDesc) {
    if (price <= budget) return price;
  }

  return 0;
}
