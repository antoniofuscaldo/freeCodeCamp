/**

Traveling Shopper

Given an amount of money you have, and an array of items you want to buy, determine how many of them you can afford.

The given amount will be in the format ["Amount", "Currency Code"]. For example: ["150.00", "USD"] or ["6000", "JPY"].
Each array item you want to purchase will be in the same format.
Use the following exchange rates to convert values:

Currency	1 Unit Equals
USD	1.00 USD
EUR	1.10 USD
GBP	1.25 USD
JPY	0.0070 USD
CAD	0.75 USD
If you can afford all the items in the list, return "Buy them all!".
Otherwise, return "Buy the first X items.", where X is the number of items you can afford when purchased in the order given.

*/

function buyItems(funds, items) {
  const rates = {
    USD: 1.0,
    EUR: 1.1,
    GBP: 1.25,
    JPY: 0.007,
    CAD: 0.75,
  };

  // Convert available funds to USD
  let available = parseFloat(funds[0]) * rates[funds[1]],
    count = 0;

  for (let i = 0; i < items.length; i++) {
    const [amount, currency] = items[i],
      priceUSD = parseFloat(amount) * rates[currency];

    if (available >= priceUSD) {
      available -= priceUSD;
      count++;
    } else {
      break;
    }
  }

  return count === items.length ? 'Buy them all!' : `Buy the first ${count} items.`;
}
