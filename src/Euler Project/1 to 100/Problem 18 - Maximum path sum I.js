function maximumPathSumI(triangle) {
  const tri = triangle.map((row) => row.slice());

  for (let row = tri.length - 2; row >= 0; row--) {
    for (let col = 0; col < tri[row].length; col++) {
      tri[row][col] += Math.max(tri[row + 1][col], tri[row + 1][col + 1]);
    }
  }

  return tri[0][0];
}
