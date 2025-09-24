/**

Inventory Update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

*/

function updateInventory(arr1, arr2) {
  const inventory = new Map();
  arr1.forEach(([qty, item]) => inventory.set(item, qty));
  arr2.forEach(([qty, item]) => {
    if (inventory.has(item)) {
      inventory.set(item, inventory.get(item) + qty);
    } else {
      inventory.set(item, qty);
    }
  });
  const updated = Array.from(inventory, ([item, qty]) => [qty, item]);
  updated.sort((a, b) => a[1].localeCompare(b[1]));
  return updated;
}
