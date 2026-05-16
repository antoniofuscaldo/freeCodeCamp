/**

Coffee Order Parser
Given a string for a coffee order, identify any menu items and return a formatted order.

Use the following menu items and prices:

Item	Price
"cold brew"	$4.50
"oat latte"	$5.00
"cappuccino"	$4.75
"espresso"	$3.00
"vanilla syrup"	$0.75
"caramel drizzle"	$0.60
"extra shot"	$0.50
"oat milk"	$0.75
"cream"	$0.75
Return a string with the matched items joined by " + ", followed by a colon and space (": "), and the total price.

For example, given "I'd like an oat latte with vanilla syrup and an extra shot please.", return "oat latte + vanilla syrup + extra shot: $6.25"

Items should appear in the order they appear in the menu and the total price should always have two decimal places

*/

function formatCoffeeOrder(order) {
  const menu = [
    ['cold brew', 4.5],
    ['oat latte', 5.0],
    ['cappuccino', 4.75],
    ['espresso', 3.0],
    ['vanilla syrup', 0.75],
    ['caramel drizzle', 0.6],
    ['extra shot', 0.5],
    ['oat milk', 0.75],
    ['cream', 0.75],
  ];

  const text = order.toLowerCase();
  const items = [];
  let total = 0;

  for (const [item, price] of menu) {
    if (text.includes(item)) {
      items.push(item);
      total += price;
    }
  }

  return `${items.join(' + ')}: $${total.toFixed(2)}`;
}
