/**

Problem 38: Pandigital multiples

Take the number 192 and multiply it by each of 1, 2, and 3:

192×1=192192×2=384192×3=576
 

By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1, 2, 3).

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1, 2, 3, 4, 5).

What is the largest 1 to k pandigital k-digit number that can be formed as the concatenated product of an integer with (1, 2, ..., n) where n > 1?

*/

function pandigitalMultiples(k) {
  function isPandigital(s, k) {
    if (s.length !== k) return false;
    var set = new Set(s.split(""));
    if (set.size !== k) return false;
    for (var i = 1; i <= k; i++) {
      if (!set.has(String(i))) return false;
    }
    return true;
  }
  var max = 0;
  for (var i = 1; i < 10000; i++) {
    var concat = "";
    var n = 1;
    while (concat.length < k) {
      concat += String(i * n);
      n++;
    }
    if (isPandigital(concat, k)) {
      var val = +concat;
      if (val > max) max = val;
    }
  }
  return max;
}

pandigitalMultiples(8);
