/**

Max Profit

Given an array of daily stock prices and a budget (in dollars), calculate the maximum profit you could make by buying and selling the stock over the given period.

You may only sell after you buy.
You can only buy whole shares.
Return the maximum possible profit as a string, rounded down to the nearest cent and formatted to two decimal places.

Tests:
Waiting:1. getMaxProfit([5, 6], 50) should return "10.00".
Waiting:2. getMaxProfit([8, 2, 5, 10], 20) should return "80.00".
Waiting:3. getMaxProfit([4, 5, 3, 6], 20) should return "18.00".
Waiting:4. getMaxProfit([54.40, 51.22, 53.99, 50.28, 53.01, 52.84], 200) should return "8.31".
Waiting:5. getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80) should return "0.00".
Waiting:6. getMaxProfit([121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33], 1230.25) should return "73.80".

*/

export function getMaxProfit(prices, budget) {
  const toCents = (x) => Math.floor(x * 100 + 1e-9);
  const budgetC = Math.floor(budget * 100 + 1e-9);
  const p = prices.map(toCents);
  let best = 0;
  for (let i = 0; i < p.length - 1; i++) {
    const buy = p[i];
    if (buy <= 0) continue;
    const qty = Math.floor(budgetC / buy);
    if (qty === 0) continue;
    for (let j = i + 1; j < p.length; j++) {
      const sell = p[j];
      const profit = qty * (sell - buy);
      if (profit > best) best = profit;
    }
  }
  if (best <= 0) return '0.00';
  return (Math.floor(best) / 100).toFixed(2);
}
