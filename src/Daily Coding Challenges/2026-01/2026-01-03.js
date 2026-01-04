/**  

Left-Handed Seat at the Table

Given a 4x2 matrix (array of arrays) representing the seating arrangement for a meal, determine how many seats a left-handed person can sit at.

A left-handed person cannot sit where a right-handed person would be in the seat to the immediate left of them.
In the given matrix:

An "R" is a seat occupied by a right-handed person.
An "L" is a seat occupied by a left-handed person.
An "U" is an unoccupied seat.
Only unoccupied seats are available to sit at.
The seats in the top row are facing "down", and the seats in the bottom row are facing "up" (like a table), so left and right are relative to the seat's orientation.
Corner seats only have one seat next to them.
For example, in the given matrix:

[
  ["U", "R", "U", "L"],
  ["U", "R", "R", "R"]
]
The top-left seat is cannot be sat in because there's a right-handed person to the left. The other two open seats can be sat in because there isn't a right-handed person to the left.

 */

function findLeftHandedSeats(table) {
  let count = 0;

  for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
      if (table[row][col] !== 'U') continue;

      let leftSeat;

      if (row === 0) {
        leftSeat = col + 1 < table[row].length ? table[row][col + 1] : null;
      } else {
        leftSeat = col - 1 >= 0 ? table[row][col - 1] : null;
      }

      if (leftSeat !== 'R') {
        count++;
      }
    }
  }

  return count;
}
