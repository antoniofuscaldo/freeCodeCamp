/**

Max Profit

Given an array of daily stock prices and a budget (in dollars), calculate the maximum profit you could make by buying and selling the stock over the given period.

You may only sell after you buy.
You can only buy whole shares.
Return the maximum possible profit as a string, rounded down to the nearest cent and formatted to two decimal places.

*/

function getMaxProfit(prices, budget) {
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
