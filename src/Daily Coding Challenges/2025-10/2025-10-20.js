/**

Tip Calculator

Given the price of your meal and a custom tip percent, return an array with three tip values; 15%, 20%, and the custom amount.

Prices will be given in the format: "$N.NN".
Custom tip percents will be given in this format: "25%".
Return amounts in the same "$N.NN" format, rounded to two decimal places.
For example, given a "$10.00" meal price, and a "25%" custom tip value, return ["$1.50", "$2.00", "$2.50"].

*/

function calculateTips(mealPrice, customTip) {
  let price = parseFloat(mealPrice.slice(1));
  let custom = parseFloat(customTip.slice(0, -1));

  function formatTip(percent) {
    return "$" + ((price * percent) / 100).toFixed(2);
  }

  return [formatTip(15), formatTip(20), formatTip(custom)];
}
