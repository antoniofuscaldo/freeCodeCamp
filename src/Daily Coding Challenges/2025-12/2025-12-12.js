/**

Inventory Update

Given a 2D array representing the inventory of your store, and another 2D array representing a shipment you have received, return your updated inventory.

Each element in the arrays will have the format: [quantity, "item"], where quantity is an integer and "item" is a string.
Update items in the inventory by adding the quantity of any matching items from the shipment.
If a received item does not exist in the current inventory, add it as a new entry to the end of the inventory.
Return inventory in the order it was given with new items at the end in the order they appear in the shipment.
For example, given an inventory of [[2, "apples"], [5, "bananas"]] and a shipment of [[1, "apples"], [3, "bananas"]], return [[3, "apples"], [8, "bananas"]].

*/

function updateInventory(inventory, shipment) {
  const map = new Map();
  for (const [qty, item] of inventory) {
    map.set(item, qty);
  }
  for (const [qty, item] of shipment) {
    if (map.has(item)) {
      map.set(item, map.get(item) + qty);
    } else {
      map.set(item, qty);
      inventory.push([qty, item]);
    }
  }
  return inventory.map(([qty, item]) => [map.get(item), item]);
}
