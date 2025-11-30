/**

Ball Trajectory

Today's challenge is inspired by the video game Pong, which was released November 29, 1972.

Given a matrix (array of arrays) that includes the location of the ball (2), and the previous location of the ball (1), return the matrix indices for the next location of the ball.

The ball always moves in a straight line.
The movement direction is determined by how the ball moved from 1 to 2.
The edges of the matrix are considered walls. If the balls hits a:
top or bottom wall, it bounces by reversing its vertical direction.
left or right wall, it bounces by reversing its horizontal direction.
corner, it bounces by reversing both directions.

*/

function getNextLocation(matrix) {
  let curr, prev;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) prev = [i, j];
      if (matrix[i][j] === 2) curr = [i, j];
    }
  }
  let dx = curr[0] - prev[0],
    dy = curr[1] - prev[1],
    nx = curr[0] + dx,
    ny = curr[1] + dy;
  if (nx < 0 || nx >= matrix.length) dx *= -1;
  if (ny < 0 || ny >= matrix[0].length) dy *= -1;
  nx = curr[0] + dx;
  ny = curr[1] + dy;
  return [nx, ny];
}
