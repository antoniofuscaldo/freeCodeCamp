/**

Streaming Cost

Given an array representing movies in the cart of your streaming service, and a string for your subscription tier, return the total cost of the movies.

Each item in the cart is an object with a "format" ("HD" or "4K") and a "type" ("rent" or "buy"). Their costs are:

"rent"	"buy"
"HD"	$3.99	$12.99
"4K"	$5.99	$19.99
Apply the following subscription tier discounts:

"none": full price
"basic": 10% off
"premium": 25% off
Return the total cost rounded to two decimal places in the format "$D.CC".

Tests:
Waiting:1. getStreamingBill([{ format: "HD", type: "rent" }], "none") should return "$3.99".
Waiting:2. getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "premium") should return "$12.73".
Waiting:3. getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "basic") should return "$18.87".
Waiting:4. getStreamingBill([{ format: "4K", type: "buy" }, { format: "4K", type: "buy" }], "premium") should return "$29.98".
Waiting:5. getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "none") should return "$42.96".
Waiting:6. getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }, { format: "HD", type: "buy" }], "basic") should return "$50.36".

*/

export function getStreamingBill(cart, subscription) {
  // base prices
  const prices = {
    HD: { rent: 3.99, buy: 12.99 },
    '4K': { rent: 5.99, buy: 19.99 },
  };

  let total = 0;

  if (subscription === 'premium') {
    for (const item of cart) {
      const base = prices[item.format][item.type];
      const discounted = base * 0.75;
      total += Math.round(discounted * 100) / 100;
    }
  } else {
    let rawTotal = 0;
    for (const item of cart) {
      rawTotal += prices[item.format][item.type];
    }

    if (subscription === 'basic') {
      rawTotal *= 0.9;
    }

    total = Math.round(rawTotal * 100) / 100;
  }

  return '$' + total.toFixed(2);
}
