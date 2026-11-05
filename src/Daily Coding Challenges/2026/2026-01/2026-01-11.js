/**

Par for the Hole

Given two integers, the par for a golf hole and the number of strokes a golfer took on that hole, return the golfer's score using golf terms.

Return:

"Hole in one!" if it took one stroke.
"Eagle" if it took two strokes less than par.
"Birdie" if it took one stroke less than par.
"Par" if it took the same number of strokes as par.
"Bogey" if it took one stroke more than par.
"Double bogey" if took two strokes more than par.

*/

function golfScore(par, strokes) {
  if (strokes === 1) return 'Hole in one!';
  if (strokes === par - 2) return 'Eagle';
  if (strokes === par - 1) return 'Birdie';
  if (strokes === par) return 'Par';
  if (strokes === par + 1) return 'Bogey';
  if (strokes === par + 2) return 'Double bogey';
  return '';
}
