/**

SpOoKy~CaSe

Given a string representing a variable name, convert it to "spooky case" using the following constraints:

Replace all underscores (_), and hyphens (-) with a tilde (~).
Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.
For example, given hello_world, return HeLlO~wOrLd.

Tests:
Waiting:1. spookify("hello_world") should return "HeLlO~wOrLd".
Waiting:2. spookify("Spooky_Case") should return "SpOoKy~CaSe".
Waiting:3. spookify("TRICK-or-TREAT") should return "TrIcK~oR~tReAt".
Waiting:4. spookify("c_a-n_d-y_-b-o_w_l") should return "C~a~N~d~Y~~b~O~w~L".
Waiting:5. spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS".

*/

export function spookify(boo) {
  let count = 0;
  return [...boo]
    .map((c) => {
      if (c === '_' || c === '-') return '~';
      const result = count % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
      count++;
      return result;
    })
    .join('');
}
