/**

2026 Winter Games Day 8: Luge

Given an array of five numbers, each representing the time (in seconds) it took a luger to complete a segment of a track, determine which segment had the fastest speed and what that speed was.

The track is divided into the following segments:

Segment 1: 320 meters
Segment 2: 280 meters
Segment 3: 350 meters
Segment 4: 300 meters
Segment 5: 250 meters
The first value in the given array corresponds to the time for segment 1, the second value to segment 2, and so on.

To calculate the speed (in meters per second) for a segment, divide the distance by the time.

Return "The luger's fastest speed was X m/s on segment Y.". Where X is the fastest speed, rounded to two decimal places, and Y is the segment number where the fastest speed occurred.

*/

function getFastestSpeed(times) {
  const dist = [320, 280, 350, 300, 250];
  let best = 0;
  let seg = 1;

  for (let i = 0; i < 5; i++) {
    const s = dist[i] / times[i];
    if (s > best) {
      best = s;
      seg = i + 1;
    }
  }

  return `The luger's fastest speed was ${best.toFixed(2)} m/s on segment ${seg}.`;
}
