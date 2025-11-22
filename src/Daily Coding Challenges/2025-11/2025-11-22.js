/**

Recipe Scaler

Given an array of recipe ingredients and a number to scale the recipe, return an array with the quantities scaled accordingly.

Each item in the given array will be a string in the format: "quantity unit ingredient". For example "2 C Flour".
Scale the quantity by the given number. Do not include any trailing zeros and do not convert any units.
Return the scaled items in the same order they are given.

*/

function scaleRecipe(ingredients, scale) {
  return ingredients.map((item) => {
    const parts = item.split(' ');
    let quantity = parseFloat(parts[0]) * scale;
    quantity = Number.isInteger(quantity) ? quantity : parseFloat(quantity.toFixed(10));
    return `${quantity} ${parts.slice(1).join(' ')}`;
  });
}
