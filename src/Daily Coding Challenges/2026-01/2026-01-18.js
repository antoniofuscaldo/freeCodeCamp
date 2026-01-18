/**

Free Shipping

Given an array of strings representing items in your shopping cart, and a number for the minimum order amount to qualify for free shipping, determine if the items in your shopping cart qualify for free shipping.

The given array will contain items from the list below:

Item	Price
"shirt"	34.25
"jeans"	48.50
"shoes"	75.00
"hat"	19.95
"socks"	15.00
"jacket"	109.95

*/

function getsFreeShipping(cart, minimum) {
  const prices = { shirt: 34.25, jeans: 48.5, shoes: 75, hat: 19.95, socks: 15, jacket: 109.95 };
  let total = 0;
  for (const item of cart) total += prices[item];
  return total >= minimum;
  return cart;
}
