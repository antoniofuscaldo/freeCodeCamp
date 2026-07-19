/**

Elevator Stops

Given a number for the current floor of an elevator and an array of requested floors, return an array of the order the elevator should visit them to minimize number of floors traveled.

If tied, go up first
Floors with a request must be visited when the elevator first passes them

Tests:
Waiting:1. elevatorStops(5, [2, 8, 3, 9]) should return [3, 2, 8, 9].
Waiting:2. elevatorStops(6, [2, 10, 8, 3, 1, 9]) should return [8, 9, 10, 3, 2, 1].
Waiting:3. elevatorStops(1, [4, 8, 3, 6, 9]) should return [3, 4, 6, 8, 9].
Waiting:4. elevatorStops(12, [6, 10, 7, 3, 1, 4]) should return [10, 7, 6, 4, 3, 1].
Waiting:5. elevatorStops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19]) should return [10, 9, 8, 6, 5, 2, 12, 19, 23].

*/

export function elevatorStops(currentFloor, stops) {
  const up = stops.filter((f) => f > currentFloor).sort((a, b) => a - b);
  const down = stops.filter((f) => f < currentFloor).sort((a, b) => b - a);

  if (up.length === 0) return down;
  if (down.length === 0) return up;

  const nearestUp = up[0] - currentFloor;
  const nearestDown = currentFloor - down[0];

  if (nearestUp < nearestDown) return [...up, ...down];
  if (nearestDown < nearestUp) return [...down, ...up];

  if (Math.abs(up[0] - currentFloor) < Math.abs(down[0] - currentFloor)) {
    return [...up, ...down];
  } else {
    return [...down, ...up];
  }
}
