/**

Earth Day Cleanup Crew

Today is Earth Day. Given an array of items you cleaned up, return your total cleanup score based on the rules below.

Given items will be one of:

Item	Base Value
"bottle"	10
"can"	6
"bag"	8
"tire"	35
"straw"	4
"cardboard"	3
"newspaper"	3
"shoe"	12
"electronics"	25
"battery"	18
"mattress"	38
A Rare item is represented as ["rare", value]. For example, ["rare", 80]. Rare items do not get a streak bonus.

Streak bonus: If the same item appears consecutively, it gets increasing bonus points.

First consecutive occurrence: base value
Second: base value + 1
Third: base value + 2
etc.
Fifth Item Multiplier: Every fifth item collected gets a multiplier.

Fifth item: *2
Tenth item: *3
etc.
Apply the multiplier after calculating any bonuses.

*/

function getCleanupScore(items) {
  const baseMap = {
    bottle: 10,
    can: 6,
    bag: 8,
    tire: 35,
    straw: 4,
    cardboard: 3,
    newspaper: 3,
    shoe: 12,
    electronics: 25,
    battery: 18,
    mattress: 38,
  };

  let total = 0;
  let prevItem = null;
  let streakCount = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const isRare = Array.isArray(item);
    let base;

    if (isRare) {
      base = item[1];
    } else {
      base = baseMap[item];
    }

    let value = base;

    if (!isRare) {
      if (prevItem === item) {
        value += streakCount;
      } else {
        streakCount = 0;
        prevItem = item;
        // value stays base
      }
    } else {
      streakCount = 0;
      prevItem = null;
    }

    const pos = i + 1;
    if (pos % 5 === 0) {
      const multiplier = Math.floor(pos / 5) + 1;
      value *= multiplier;
    }

    total += value;
  }

  return total;
}
